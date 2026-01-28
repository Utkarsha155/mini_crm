import { body } from 'express-validator'

export const registerValidator = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  body('role').isIn(['ADMIN', 'EMPLOYEE'])
]

export const loginValidator = [
  body('email').isEmail(),
  body('password').notEmpty()
]
