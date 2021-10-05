import { randomBytes } from 'crypto'
import { RequestHandler } from 'express'

import { logger } from '../config/logger'

export const getThroughRedirect: RequestHandler = (_, res) => {
  logger.info('handler: getThroughRedirect')

  const params = new URLSearchParams({
    dateTime: new Date().toUTCString(),
    hash: randomBytes(32).toString('base64')
  })

  const path = `/get?${params.toString()}`

  logger.debug(`getThroughRedirect: ${path}`)

  res.redirect(path)
}
