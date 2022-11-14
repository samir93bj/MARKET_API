import { config } from '../config/config.js'

const connectionData = {
  connection_MariaDB: {
    client: 'mysql',
    connection: {
      host: config.mariadb_service.host,
      port: config.mariadb_service.port,
      user: config.mariadb_service.user,
      password: config.mariadb_service.password,
      database: config.mariadb_service.databaseName
    },
    pool: { min: 0, max: 7 }
  },
  connection_mongoDB: {
    uri: config.mongodb.uri
  },
  connection_firebase: {
    data: config.firebase.data
  }
}

export default connectionData
