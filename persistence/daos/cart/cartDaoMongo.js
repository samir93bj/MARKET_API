import Cart from '../../../db/Mongo/models/cart.model.js'
import error from '../../../utils/error.js'

class CartDaoMongo {
  constructor () {
    this.CartModel = Cart
  }

  async list () {
    try {
      const Carts = await this.CartModel.find()
      return Carts
    } catch (e) {
      throw error('Internal server error', 500)
    }
  }

  async getById (id) {
    try {
      const item = await this.CartModel.findById(id)
      return item
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }

  async save (newItem) {
    try {
      const item = new this.CartModel(newItem)
      const itemSave = await this.CartModel.create(item)

      return itemSave
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }

  async update (id, item) {
    try {
      const newCart = await this.CartModel.findByIdAndUpdate(id, item)
      return newCart
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }

  async delete (id) {
    try {
      await this.CartModel.findByIdAndDelete(id)

      return id
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }
}

export { CartDaoMongo }
