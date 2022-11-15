import CartDaoRepository from '../persistence/repository/product.repository.js'
const cartDaoRepository = new CartDaoRepository()

const list = async () => {
  const products = await cartDaoRepository.list()
  return products
}

const getById = async (id) => {
  const product = await cartDaoRepository.getById(id)
  return product
}

const save = async (data) => {
  const product = await cartDaoRepository.save(data)
  return product
}

const update = async (id, data) => {
  const productUp = await cartDaoRepository.update(id, data)
  await getById(id)

  return productUp
}

const deleteById = async (id) => {
  await cartDaoRepository.delete(id)

  return id
}

export { list, getById, save, update, deleteById }
