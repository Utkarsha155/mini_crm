import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mini CRM Backend API',
      version: '1.0.0',
      description: 'Mini CRM Backend (Users, Customers, Tasks)'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/modules/**/*.js']
}

export const swaggerSpec = swaggerJsdoc(options)
export const swaggerUiServe = swaggerUi.serve
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec)
