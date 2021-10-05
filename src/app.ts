import express from 'express'

import { logger } from './config/logger'
import { router } from './routes/routes'

const {
  PORT,
  NODE_ENV
} = process.env
const app = express()

logger.info(`Spinning up the application for ${NODE_ENV} environment`)

app.use('/', router)

app.listen(PORT, () => {
  logger.info(`Tiny Lobster listening at http://localhost:${PORT}`)
})
