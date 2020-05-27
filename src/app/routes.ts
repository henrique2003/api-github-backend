import { Router } from 'express'

const router = Router()

// Index
router.get('/user')
// Show
router.get('/user/:id')
// Store
router.post('/user')
// Update
router.put('/user')
// Destroy
router.delete('/user/:id')

export default router
