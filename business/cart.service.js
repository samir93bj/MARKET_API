import CartDaoRepository from '../persistence/repository/cart.repository.js'
const cartDaoRepository = new CartDaoRepository()

const list = async () => {
  const carts = await cartDaoRepository.list()
  return carts
}

const getById = async (id) => {
  const cart = await cartDaoRepository.getById(id)
  return cart
}

const save = async () => {
  const cart = await cartDaoRepository.save()
  return cart
}

const addProduct = async (id, data) => {
  const cart = await cartDaoRepository.addProduct(id, data)
  return cart
}

const deleteProduct = async (idCart, idProduct) => {
  const cart = await cartDaoRepository.deleteProduct(idCart, idProduct)
  return cart
}

const deleteById = async (id) => {
  await cartDaoRepository.delete(id)

  return id
}

export { list, getById, save, addProduct, deleteProduct, deleteById }
