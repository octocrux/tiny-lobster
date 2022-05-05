import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { join } from 'path'

import { logger } from '../config/logger'
import { readCornerLines } from '../util/read-corner-lines'

export const getStuff: RequestHandler = (req, res) => {
  logger.info('handler: getStuff')

  const fileName = join(process.cwd(), 'static', 'stuff.txt')

  logger.info(`getStuff: ${fileName}`)

  readCornerLines(fileName).then(({ firstLine, lastLine }) => {
    logger.info('getStuff: lines read')

    res.status(StatusCodes.OK).json({
      firstLine,
      lastLine,
      searchParams: req.query
    })
  })
}
