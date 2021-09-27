import express from 'express'

import { router } from './routes/routes'

const {
  PORT = 3000
} = process.env
const app = express()

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Tiny Lobster listening at http://localhost:${PORT}`)
})
