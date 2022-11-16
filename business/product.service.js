import ProductRepository from '../persistence/repository/product.repository.js'
import error from '../utils/error.js'
const productRepository = new ProductRepository()

const list = async () => {
  const products = await productRepository.list()
  return products
}

const getById = async (id) => {
  const product = await productRepository.getById(id)

  if (!product) {
    throw error('Product not found', 400)
  }

  return product
}

const save = async (data) => {
  const product = await productRepository.save(data)
  return product
}

const update = async (id, data) => {
  await productRepository.update(id, data)
  const productUpdated = await getById(id)

  return productUpdated
}

const deleteById = async (id) => {
  const product = await getById(id)
  await productRepository.delete(product.id)

  return id
}

export { list, getById, save, update, deleteById }
