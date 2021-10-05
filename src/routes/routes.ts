import { Router } from 'express'

import { getStuff } from '../handlers/get-stuff'
import { getThroughRedirect } from '../handlers/get-through-redirect'
import { updateId } from '../handlers/update-id'

export const router = Router()

router.get('/get', getStuff)

router.get('/get-through-redirect', getThroughRedirect)

router.post('/update/:id', updateId)
