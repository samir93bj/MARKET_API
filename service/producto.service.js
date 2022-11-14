import { list, getById, save, update, deleteById } from '../business/product.service.js'
import error from '../utils/error.js'

class ProductService {
  async list () {
    const productos = await list()

    return productos
  }

  async getById (id) {
    const result = await getById(id)

    if (result === null) {
      throw error('Producto not found', 400)
    }

    return result
  }

  async save (product) {
    const newProduc = {
      name: product.name,
      description: product.description,
      code: product.code,
      image: product.image,
      price: product.price,
      stock: product.stock
    }

    const producSaved = await save(newProduc)

    return producSaved
  }

  async update (id, data) {
    await this.getById(id)
    const productUp = await update(id, data)

    return productUp
  }

  async delete (id) {
    const product = await getById(id)
    await deleteById(product.id)

    return id
  }
}

export default ProductService
