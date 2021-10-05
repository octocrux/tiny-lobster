import { ErrorRequestHandler } from 'express'

import { logger } from '../config/logger'


export const logErrors: ErrorRequestHandler = (error, _, __, next) => {
  logger.error(error.stack)

  next()
}
