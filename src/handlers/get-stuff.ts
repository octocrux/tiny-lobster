import { RequestHandler } from 'express'
import path from 'path'
import { URLSearchParams } from 'url'

import { logger } from '../config/logger'
import { readCornerLines } from '../util/read-corner-lines'

export const getStuff: RequestHandler = (req, res) => {
  logger.info('handler: getStuff')
  const url = new URLSearchParams(req.query as Record<string, string>)
  const fileName = path.resolve(__dirname, '../../static/stuff.txt')

  readCornerLines(fileName).then(({ firstLine, lastLine }) => {
    logger.info('getStuff: lines read')

    res.status(200).json({
      firstLine,
      lastLine,
      params: url.toString()
    })
  })
}
