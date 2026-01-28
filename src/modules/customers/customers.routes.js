/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer management
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create customer (Admin only)
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, phone]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               company:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created
 */

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get customers with pagination
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer list
 */

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer details
 */

/**
 * @swagger
 * /customers/{id}:
 *   patch:
 *     summary: Update customer (Admin only)
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer updated
 */

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete customer (Admin only)
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Customer deleted
 */


import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware.js'
import roleMiddleware from '../../middlewares/role.middleware.js'
import { ROLES } from '../../constants/roles.js'
import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from './customers.controller.js'

const router = Router()

router.use(authMiddleware)

router.post('/', roleMiddleware([ROLES.ADMIN]), createCustomer)
router.get('/', getCustomers)
router.get('/:id', getCustomerById)
router.patch('/:id', roleMiddleware([ROLES.ADMIN]), updateCustomer)
router.delete('/:id', roleMiddleware([ROLES.ADMIN]), deleteCustomer)

export default router
