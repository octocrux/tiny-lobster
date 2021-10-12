import { RequestHandler } from 'express'
import path from 'path'

import { logger } from '../config/logger'
import { readCornerLines } from '../util/read-corner-lines'

export const getStuff: RequestHandler = (req, res) => {
  logger.info('handler: getStuff')

  const fileName = path.resolve(__dirname, '../../static/stuff.txt')

  readCornerLines(fileName).then(({ firstLine, lastLine }) => {
    logger.info('getStuff: lines read')

    res.status(200).json({
      firstLine,
      lastLine,
      searchParams: req.query
    })
  })
}
