/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management (Admin only)
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details
 */

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update user role
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [role]
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [ADMIN, EMPLOYEE]
 *     responses:
 *       200:
 *         description: Updated user
 */


import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware.js'
import roleMiddleware from '../../middlewares/role.middleware.js'
import { ROLES } from '../../constants/roles.js'
import { getUsers, getUserById, updateUserRole } from './users.controller.js'

const router = Router()

router.use(authMiddleware)
router.use(roleMiddleware([ROLES.ADMIN]))

router.get('/', getUsers)
router.get('/:id', getUserById)
router.patch('/:id', updateUserRole)

export default router
