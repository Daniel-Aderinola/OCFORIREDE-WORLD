import { Router } from 'express'
import upload from '../middleware/uploadMiddleware'
import { submitCV } from '../controllers/cvController'

const router = Router()

router.post('/', upload.single('cv'), submitCV)

export default router
