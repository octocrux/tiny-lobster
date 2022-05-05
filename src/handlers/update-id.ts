import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'

import { logger } from '../config/logger'

export const updateId: RequestHandler = (req, res) => {
  logger.info('updateId')

  const { id } = req.params

  res.status(StatusCodes.OK).send(`${id} has been updated`)
}
