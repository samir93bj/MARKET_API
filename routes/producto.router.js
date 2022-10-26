import express from 'express'
import ProductService from '../service/producto.service.js'
import { success } from '../networks/responses.js'
import { validateDate } from '../schema/product.schema.js'

const service = new ProductService('productos.json')
const router = express.Router()

router.get('/',
  async (req, res, next) => {
    try {
      const products = await service.list()
      return success(req, res, 200, products)
    } catch (err) {
      next(err)
    }
  })

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await service.getById(id)

      return success(req, res, 200, product)
    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validateDate,
  async (req, res, next) => {
    try {
      const data = req.body
      const newProduct = await service.save(data)

      return success(req, res, 201, newProduct)
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id',
  async (req, res, next) => {
    try {
      const id = req.params.id
      await service.delete(id)
      return success(req, res, 200, id)
    } catch (err) {
      next(err)
    }
  })

router.put('/:id',
  async (req, res, next) => {
    try {
      const id = req.params.id
      const data = req.body
      const product = await service.update(id, data)

      return success(req, res, 201, product)
    } catch (err) {
      next(err)
    }
  })

export { router }
