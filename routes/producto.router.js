import express from 'express'
import { success } from '../networks/responses.js'
import { validateDate } from '../schema/product.schema.js'
import { isAdminRole } from '../middleware/auth.handler.js'
import ProductService from '../service/producto.service.js'

const service = new ProductService()
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
  isAdminRole,
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
  isAdminRole,
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
  isAdminRole,
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
