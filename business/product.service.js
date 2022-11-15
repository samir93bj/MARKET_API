import ProductRepository from '../persistence/repository/product.repository.js'
const productRepository = new ProductRepository()

const list = async () => {
  const products = await productRepository.list()
  return products
}

const getById = async (id) => {
  const product = await productRepository.getById(id)
  return product
}

const save = async (data) => {
  const product = await productRepository.save(data)
  return product
}

const update = async (id, data) => {
  const productUp = await productRepository.update(id, data)
  await getById(id)

  return productUp
}

const deleteById = async (id) => {
  await productRepository.delete(id)

  return id
}

export { list, getById, save, update, deleteById }
