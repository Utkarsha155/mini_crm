import prisma from '../../config/prisma.js'
import { ROLES } from '../../constants/roles.js'

export const getAllUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  })
}

export const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  })

  if (!user) {
    throw { status: 404, message: 'User not found' }
  }

  return user
}

export const updateUserRole = async (id, role) => {
  if (![ROLES.ADMIN, ROLES.EMPLOYEE].includes(role)) {
    throw { status: 400, message: 'Invalid role' }
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(id) }
  })

  if (!user) {
    throw { status: 404, message: 'User not found' }
  }

  return prisma.user.update({
    where: { id: Number(id) },
    data: { role },
    select: {
      id: true,
      name: true,
      email: true,
      role: true
    }
  })
}
