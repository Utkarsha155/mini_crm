/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create task (Admin only)
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, assignedTo, customerId]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               assignedTo:
 *                 type: integer
 *               customerId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Task created
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get tasks (Admin or Employee)
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Task list
 */

/**
 * @swagger
 * /tasks/{id}/status:
 *   patch:
 *     summary: Update task status
 *     tags: [Tasks]
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
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [PENDING, IN_PROGRESS, DONE]
 *     responses:
 *       200:
 *         description: Status updated
 */


import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware.js'
import roleMiddleware from '../../middlewares/role.middleware.js'
import { ROLES } from '../../constants/roles.js'
import {
  createTask,
  getTasks,
  updateTaskStatus
} from './tasks.controller.js'

const router = Router()

router.use(authMiddleware)

router.post('/', roleMiddleware([ROLES.ADMIN]), createTask)
router.get('/', getTasks)
router.patch('/:id/status', updateTaskStatus)

export default router
