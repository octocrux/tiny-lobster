import { Router } from 'express'

export const router = Router()

router.post('/update/:id', (req, res) => {
  const { id } = req.params

  res.status(200).send(`${id} has been updated`)
})
