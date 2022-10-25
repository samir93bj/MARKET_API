import express from 'express'
import ProductService from '../service/producto.service.js'
import { success } from '../networks/responses.js'
const service = new ProductService('productos.txt')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const products = await service.list()
    return success(req, res, 200, products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'Get product id'
    })
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'post products'
    })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'delete products'
    })
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'put products'
    })
  } catch (err) {
    next(err)
  }
})

export { router }
