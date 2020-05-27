import { Request, Response } from 'express'
import User from '../models/users'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find({})

      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json('Server Error')
    }
  }
}

export default new UserController()
