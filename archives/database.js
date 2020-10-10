import mongoose from 'mongoose'
import { MONGO_CONNECTION } from './config'

export const connectDatabase = () => {
  mongoose.connect(MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  mongoose.connection.once('open', () => {
    console.info('Mongoose connection has been connected.')
  })

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
}

export default connectDatabase
