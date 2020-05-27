import { Request, Response } from 'express'
import User from '../models/users'
import { ServerError } from '../Errors/ServerError'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find({})

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json(new ServerError())
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
      return res.status(500).json(new ServerError())
    }
  }
}

export default new UserController()
