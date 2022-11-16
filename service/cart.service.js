import { save, list, addProduct, getById, deleteById, deleteProduct } from '../business/cart.service.js'
import ProductService from './producto.service.js'
import error from '../utils/error.js'

const productService = new ProductService()

class CartService {
  async list () {
    const carts = await list()
    return carts
  }

  async getById (id) {
    const cart = getById(id)

    if (!cart) {
      throw error('Cart not exist', 400)
    }

    return cart
  }

  async save () {
    const newCart = await save()

    return newCart
  }

  async addProduct (id, data) {
    const cart = await this.getById(id)

    const idProducto = data.id
    const product = await productService.getById(idProducto)

    if (product.stock > 0) {
      await addProduct(cart.id, product)
    } else {
      throw error('insufficient stock', 400)
    }
    const cartUpdated = await this.getById(id)
    return cartUpdated
  }

  async deleteProduct (idCart, idProduct) {
    await this.getById(idCart)

    await deleteProduct(idCart, idProduct)
    const cartUpdated = await this.getById(idCart, idProduct)

    return cartUpdated
  }

  async delete (id) {
    const cart = await this.getById(id)
    await deleteById(cart.id)
    return id
  }
}

export default CartService
