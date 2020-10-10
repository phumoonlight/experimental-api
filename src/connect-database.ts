import mongoose from 'mongoose'
import { ENV } from './config'

const uris: string = ENV.mongoConnection || ''

export const connectDatabase = async () => {
  try {
    mongoose.connect(uris, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })

    mongoose.connection.once('open', () => {
      console.info('[database] mongoose connection has been connected.')
    })
  
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
  } catch (error) {
    console.error(error)
  }
}
