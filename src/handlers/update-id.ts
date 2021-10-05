import { RequestHandler } from 'express'

import { logger } from '../config/logger'

export const updateId: RequestHandler = (req, res) => {
  logger.info('updateId')

  const { id } = req.params

  res.status(200).send(`${id} has been updated`)
}
