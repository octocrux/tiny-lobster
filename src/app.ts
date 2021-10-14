import express from 'express'

import config from './config/env'
import { logger } from './config/logger'
import { logErrors } from './middlewares/log-errors'
import { router } from './routes/routes'

logger.info(`Spinning up the application for ${config.NODE_ENV} environment on port ${config.PORT}`)

const app = express()

app.use('/', router)
app.use(logErrors)

app.listen(config.PORT, () => {
  const message = `Tiny Lobster listening at http://localhost:${config.PORT}`

  logger.info(message)
  console.log(message)
})
