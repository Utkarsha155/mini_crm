import prisma from '../../config/prisma.js'
import { hashPassword, comparePassword } from '../../utils/bcrypt.js'
import { generateToken } from '../../utils/jwt.js'

export const register = async ({ name, email, password, role }) => {
  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    throw { status: 409, message: 'Email already exists' }
  }

  const hashedPassword = await hashPassword(password)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true
    }
  })

  return user
}

export const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    throw { status: 401, message: 'Invalid credentials' }
  }

  const isMatch = await comparePassword(password, user.password)
  if (!isMatch) {
    throw { status: 401, message: 'Invalid credentials' }
  }

  const token = generateToken({ userId: user.id, role: user.role })

  return {
    accessToken: token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  }
}
