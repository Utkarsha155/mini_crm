import prisma from '../../config/prisma.js'
import { paginate } from '../../utils/pagination.js'

export const createCustomer = async ({ name, email, phone, company }) => {
  const existing = await prisma.customer.findFirst({
    where: {
      OR: [{ email }, { phone }]
    }
  })

  if (existing) {
    throw { status: 409, message: 'Customer with email or phone already exists' }
  }

  return prisma.customer.create({
    data: { name, email, phone, company }
  })
}

export const getCustomers = async ({ page = 1, limit = 10 }) => {
  const { take, skip } = paginate(page, limit)

  const [data, totalRecords] = await Promise.all([
    prisma.customer.findMany({
      skip,
      take,
      orderBy: { createdAt: 'desc' }
    }),
    prisma.customer.count()
  ])

  const totalPages = Math.ceil(totalRecords / take)

  return {
    page: Number(page),
    limit: Number(limit),
    totalRecords,
    totalPages,
    data
  }
}

export const getCustomerById = async (id) => {
  const customer = await prisma.customer.findUnique({
    where: { id: Number(id) }
  })

  if (!customer) {
    throw { status: 404, message: 'Customer not found' }
  }

  return customer
}

export const updateCustomer = async (id, data) => {
  const customer = await prisma.customer.findUnique({
    where: { id: Number(id) }
  })

  if (!customer) {
    throw { status: 404, message: 'Customer not found' }
  }

  return prisma.customer.update({
    where: { id: Number(id) },
    data
  })
}

export const deleteCustomer = async (id) => {
  const customer = await prisma.customer.findUnique({
    where: { id: Number(id) }
  })

  if (!customer) {
    throw { status: 404, message: 'Customer not found' }
  }

  await prisma.customer.delete({
    where: { id: Number(id) }
  })
}
