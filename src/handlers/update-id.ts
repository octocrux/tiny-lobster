import { RequestHandler } from 'express'

export const updateId: RequestHandler = (req, res) => {
  const { id } = req.params

  res.status(200).send(`${id} has been updated`)
}
