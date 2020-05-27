import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { connect } from 'mongoose'
import routes from './app/routes'

class App {
  public express: express.Application

  public constructor () {
    this.db()
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(cors())
    this.express.use(helmet())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(express.json())
  }

  private routes (): void {
    this.express.use('/api/', routes)
  }

  private async db (): Promise<void> {
    try {
      await connect('mongodb://localhost:27017/api-github', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })

      console.log('MongoDb connect...')
    } catch (error) {
      return console.error(error.message)
    }
  }
}

export default new App().express
