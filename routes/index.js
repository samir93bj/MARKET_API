import express from 'express'

import { router as productRouter } from '../routes/producto.router.js'
import { router as cartRouter } from '../routes/cart.router.js'

const router = express.Router()

function apiRouter (app) {
  app.use('/api', router)
  router.use('/productos', productRouter)
  router.use('/carrito', cartRouter)

  app.use('*', async (req, res, next) => {
    res.status(400).json({
      error: -2,
      description: {
        route: req.baseUrl,
        method: req.method,
        msg: 'not implemented'
      }
    })
  })
}

export { apiRouter }
