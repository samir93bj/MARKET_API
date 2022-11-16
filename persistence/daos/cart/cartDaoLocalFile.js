import fs from 'fs'
import moment from 'moment'
import error from '../../../utils/error.js'
import ProductRepository from '../../repository/product.repository.js'

const productRepository = new ProductRepository()

class CartDaoMemory {
  constructor (nameFile = 'carts.json') {
    this.nameFile = nameFile
  }

  async readFile () {
    const data = await fs.promises.readFile(`./db/${this.nameFile}`, 'utf-8')
    return JSON.parse(data)
  }

  async writeFile (data) {
    await fs.promises.writeFile(`./db/${this.nameFile}`, JSON.stringify(data))
    return true
  }

  async list () {
    const carts = await this.readFile()
    return carts
  }

  async getById (id) {
    const data = await this.readFile()
    const cart = data.find(item => item.id === parseInt(id)) || null

    if (!cart) {
      throw error('Cart not exist', 400)
    }

    return cart
  }

  async save () {
    const newCart = {}
    const data = await this.readFile()

    if (data.length === 0) {
      newCart.id = 1
    } else {
      const lastCart = data[data.length - 1]
      const id = lastCart.id + 1

      newCart.id = id
    }

    newCart.timestamp = moment().format('DD/MM/YYYY HH:mm:ss A')
    newCart.products = []

    data.push(newCart)

    await this.writeFile(data)

    return newCart
  }

  async addProduct (id, data) {
    const carts = await this.list()
    const cart = await this.getById(id)

    const idProducto = data.id
    const product = await productRepository.getById(idProducto)

    if (product.stock > 0) {
      cart.products.push(product)
    } else {
      throw error('insufficient stock', 400)
    }

    const index = carts.findIndex(item => item.id === cart.id)
    carts[index] = cart

    await this.writeFile(carts)

    return cart
  }

  async deleteProduct (idCart, idProduct) {
    const cart = await this.getById(idCart)
    const productInCart = cart.products.find(item => item.id === parseInt(idProduct) || null)

    if (!productInCart) {
      throw error('The product does not exist in the cart', 400)
    }

    const index = cart.products.findIndex(item => item.id === parseInt(idProduct))
    cart.products.splice(index, 1)

    const carts = await this.list()
    const indexCart = carts.findIndex(item => item.id === parseInt(idCart))

    carts[indexCart] = cart

    await this.writeFile(carts)

    return cart
  }

  async delete (id) {
    const list = await this.list()

    const index = list.findIndex(item => item.id === id)
    list.splice(index, 1)

    await this.writeFile(list)

    return id
  }
}

export default CartDaoMemory
