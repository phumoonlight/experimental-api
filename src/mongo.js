import mongoose from 'mongoose'
import { MONGO_CONNECTION } from './config'

mongoose.connect(MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

mongoose.connection.once('open', () => {
  console.info('Mongoose connection has been connected.')
})
