import mongoose from 'mongoose'
import connectionData from '../db.config.js'

const Connection = async () => {
  try {
    await mongoose.connect(connectionData.connection_mongoDB.uri)
    console.log('[Database: Mongo] Connect successfully')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

export default Connection
