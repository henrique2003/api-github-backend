import { Router } from 'express'
import UserController from './controllers/user-controller'

const router = Router()

const { index } = UserController

// Index
router.get('/users', index)
// Show
router.get('/user/:id')
// Store
router.post('/user')
// Update
router.put('/user')
// Destroy
router.delete('/user/:id')

export default router
