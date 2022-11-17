import Product from '../../../db/Mongo/models/product.model.js'
import error from '../../../utils/error.js'

class ProductDaoMongo {
  constructor () {
    this.ProductModel = Product
  }

  async list () {
    try {
      const products = await this.ProductModel.find()
      return products
    } catch (error) {
      console.log(error)
      throw error('Internal server error', 500)
    }
  }

  async getById (id) {
    try {
      const item = await this.ProductModel.findById(id)
      return item
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }

  async save (newItem) {
    try {
      const item = new this.ProductModel(newItem)
      const itemSave = await this.ProductModel.create(item)

      return itemSave
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }

  async update (id, item) {
    try {
      const newProduct = await this.ProductModel.findByIdAndUpdate(id, item)
      return newProduct
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }

  async delete (id) {
    try {
      await this.ProductModel.findByIdAndDelete(id)

      return id
    } catch (err) {
      console.log(err)
      throw error('Internal Server Error', 500)
    }
  }
}

export { ProductDaoMongo }
