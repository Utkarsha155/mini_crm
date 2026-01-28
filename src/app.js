import express from 'express'
import cors from 'cors'
import authRoutes from './modules/auth/auth.routes.js'
import userRoutes from './modules/users/users.routes.js'
import errorMiddleware from './middlewares/error.middleware.js'
import customerRoutes from './modules/customers/customers.routes.js'
import taskRoutes from './modules/tasks/tasks.routes.js'
import { swaggerUiServe, swaggerUiSetup } from './config/swagger.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUiServe, swaggerUiSetup)

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/customers', customerRoutes)
app.use('/tasks', taskRoutes)

app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.send('Mini CRM Backend Running')
})

export default app
