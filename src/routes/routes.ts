import { Router } from 'express'

import { getStuff } from '../handlers/get-stuff'
import { updateId } from '../handlers/update-id'

export const router = Router()

router.get('/get', getStuff)

router.post('/update/:id', updateId)
