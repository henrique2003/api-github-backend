import { Request, Response } from 'express'
import User from '../models/users'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find({})

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json(new Error('Server Error'))
    }
  }

  public async show (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json(new Error('Id não encontrado'))
      }

      const user = await User.findById(id)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(new Error('Server Error'))
    }
  }
}

export default new UserController()
