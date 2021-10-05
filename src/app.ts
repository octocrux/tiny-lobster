import express from 'express'

import { logger } from './config/logger'
import { logErrors } from './middlewares/log-errors'
import { router } from './routes/routes'

const {
  PORT,
  NODE_ENV
} = process.env

logger.info(`Spinning up the application for ${NODE_ENV} environment`)

const app = express()

app.use('/', router)
app.use(logErrors)

app.listen(PORT, () => {
  logger.info(`Tiny Lobster listening at http://localhost:${PORT}`)
})
