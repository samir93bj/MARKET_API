import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  port: process.env.PORT || 8080
}

export { config }
