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

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const { body } = req
      const { name, avatar_url, bio, github_username } = body

      body.name = name.trim()
      body.avatar_url = avatar_url.trim()
      body.bio = bio.trim()
      body.github_username = github_username.trim()

      if (!name || !avatar_url || !bio || !github_username) {
        return res.status(400).json(new Error('Campo em branco'))
      }

      const user = await User.create(body)

      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(new ServerError())
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      const { body, params } = req
      const { id } = params
      const { name, avatar_url, bio, github_username } = body

      if (!id) {
        return res.status(400).json(new Error('Id não encontrado'))
      }

      body.name = name.trim()
      body.avatar_url = avatar_url.trim()
      body.bio = bio.trim()
      body.github_username = github_username.trim()

      const userBody: {
        name?: string
        avatar_url?: string
        bio?: string
        github_username?: string
      } = {}

      const isFields = ['name', 'avatar_url', 'bio', 'github_username']
      for (const field of isFields) {
        if (field) userBody[field] = body[field]
      }

      const user = await User.findByIdAndUpdate({
        _id: id
      }, {
        $set: userBody
      }, {
        upsert: true
      })

      return res.status(200).json(user)
    } catch (error) {
      console.log(error.message)
      return res.status(500).json(new ServerError())
    }
  }
}

export default new UserController()
