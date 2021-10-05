import { RequestHandler } from 'express'
import path from 'path'
import { URLSearchParams } from 'url'

import { readCornerLines } from '../util/read-corner-lines'

export const getStuff: RequestHandler = (req, res) => {
  const url = new URLSearchParams(req.query as Record<string, string>)
  const fileName = path.resolve(__dirname, '../../static/stuff.txt')

  readCornerLines(fileName).then(({ firstLine, lastLine }) => {
    res.status(200).json({
      firstLine,
      lastLine,
      params: url.toString()
    })
  })
}
