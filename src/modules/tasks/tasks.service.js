import prisma from '../../config/prisma.js'
import { ROLES } from '../../constants/roles.js'
import { TASK_STATUS } from '../../constants/taskStatus.js'

export const createTask = async ({
  title,
  description,
  assignedTo,
  customerId,
  status = TASK_STATUS.PENDING
}) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(assignedTo) }
  })

  if (!user || user.role !== ROLES.EMPLOYEE) {
    throw { status: 404, message: 'Assigned employee not found' }
  }

  const customer = await prisma.customer.findUnique({
    where: { id: Number(customerId) }
  })

  if (!customer) {
    throw { status: 404, message: 'Customer not found' }
  }

  return prisma.task.create({
    data: {
      title,
      description,
      status,
      assignedTo: Number(assignedTo),
      customerId: Number(customerId)
    }
  })
}

export const getTasks = async (user) => {
  const where =
    user.role === ROLES.ADMIN
      ? {}
      : { assignedTo: Number(user.userId) }

  return prisma.task.findMany({
    where,
    include: {
      user: {
        select: { id: true, name: true, email: true }
      },
      customer: {
        select: { id: true, name: true, email: true, phone: true }
      }
    }
  })
}

export const updateTaskStatus = async (id, status, user) => {
  if (!Object.values(TASK_STATUS).includes(status)) {
    throw { status: 400, message: 'Invalid status' }
  }

  const task = await prisma.task.findUnique({
    where: { id: Number(id) }
  })

  if (!task) {
    throw { status: 404, message: 'Task not found' }
  }

  if (
    user.role === ROLES.EMPLOYEE &&
    task.assignedTo !== Number(user.userId)
  ) {
    throw { status: 403, message: 'Forbidden' }
  }

  return prisma.task.update({
    where: { id: Number(id) },
    data: { status }
  })
}
