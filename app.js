import Express from 'express'
import helmet from 'helmet'
import { errors } from './networks/error.js'

import { config } from './config/config.js'
import { apiRouter } from './routes/index.js'

const app = new Express()

app.use(helmet())

apiRouter(app)

app.use(errors)

app.listen(config.port, () => {
  console.log('Server listo en port: ', config.port)
})
