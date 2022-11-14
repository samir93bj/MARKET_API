import Product from '../../../db/models/product.model.js'
import error from '../../../utils/error.js'
import mongoose from 'mongoose'
import connectionData from '../../../db/db.config.js'

const connection = async () => {
  try {
    await mongoose.connect(connectionData.connection_mongoDB.uri)
    console.log('Connect successfully')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
connection()

class ProductDaoMongo {
  constructor () {
    this.ProductModel = Product
  }

  async list () {
    try {
      const products = await this.ProductModel.find()
      return products
    } catch (e) {
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

export default ProductDaoMongo
