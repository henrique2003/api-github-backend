import { Router } from 'express'
import UserController from './controllers/user-controller'

const router = Router()

const { index, show, store, update, destroy } = UserController

// Index
router.get('/users', index)
// Show
router.get('/user/:id', show)
// Store
router.post('/user', store)
// Update
router.put('/user/:id', update)
// Destroy
router.delete('/user/:id', destroy)

export default router
