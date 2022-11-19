import { config } from '../config/config.js'

const connectionData = {
  connection_mongoDB: {
    uri: config.mongodb.uri
  },
  connection_firebase: {
    data: config.firebase.data
  }
}

export default connectionData
