import express from 'express'

import { router } from './routes/routes'

const {
  PORT,
  NODE_ENV
} = process.env
const app = express()

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Tiny Lobster listening at http://localhost:${PORT}`)
  console.log(`Environment: ${NODE_ENV}`)
})
