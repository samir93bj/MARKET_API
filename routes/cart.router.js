import express from 'express'
import { success } from '../networks/responses.js'
import CartService from '../service/cart.service.js'
import { validateData } from '../schema/carts.schema.js'

const service = new CartService('carts.json')
const router = express.Router()

router.get('/',
  async (req, res, next) => {
    try {
      const carts = await service.list()

      return success(req, res, 200, carts)
    } catch (error) {
      next(error)
    }
  })

router.get('/:id',
  async (req, res, next) => {
    try {
      const id = req.params.id
      const cart = await service.getById(id)

      return success(req, res, 200, cart)
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  async (req, res, next) => {
    try {
      const cart = await service.save()

      return success(req, res, 201, cart)
    } catch (error) {
      next(error)
    }
  })

router.post('/:id/productos',
  validateData,
  async (req, res, next) => {
    try {
      const id = req.params.id
      const data = req.body
      const cart = await service.addProduct(id, data)

      return success(req, res, 201, cart)
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id',
  async (req, res, next) => {
    try {
      const id = req.params.id
      const idDeleted = await service.delete(id)

      return success(req, res, 200, idDeleted)
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id/productos/:id_prod',
  async (req, res, next) => {
    try {
      const id = req.params.id
      const idProd = req.params.id_prod

      const cart = await service.deleteProduct(id, idProd)

      return success(req, res, 200, cart)
    } catch (err) {
      next(err)
    }
  })

export { router }
