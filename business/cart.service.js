import CartDaoRepository from '../persistence/repository/cart.repository.js'
import { getById as productGetById } from './product.service.js'
import error from '../utils/error.js'

const cartDaoRepository = new CartDaoRepository()

const list = async () => {
  const carts = await cartDaoRepository.list()
  return carts
}

const getById = async (id) => {
  const cart = await cartDaoRepository.getById(id)

  if (!cart) {
    throw error('Cart inexistent', 400)
  }

  return cart
}

const save = async () => {
  const cart = await cartDaoRepository.save()
  return cart
}

const addProduct = async (id, idProduct) => {
  const cart = await getById(id)
  const product = await productGetById(idProduct)

  await cartDaoRepository.addProduct(cart, product)

  const cartUpdated = await getById(id)
  return cartUpdated
}

const deleteProduct = async (idCart, idProduct) => {
  await getById(idCart)
  await productGetById(idProduct)
  await cartDaoRepository.deleteProduct(idCart, idProduct)

  const cart = await getById(idCart)
  return cart
}

const deleteById = async (id) => {
  await cartDaoRepository.delete(id)

  return id
}

export { list, getById, save, addProduct, deleteProduct, deleteById }
