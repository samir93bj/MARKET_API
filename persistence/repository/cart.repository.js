import CartDaoFactory from '../daos/cart/cartDaoFactory.js'
const cartDaoFactory = new CartDaoFactory()

class CartDaoRepository {
  constructor () {
    this.dao = cartDaoFactory.getDao()
  }

  async list () {
    return this.dao.list()
  }

  async getById (id) {
    return this.dao.getById(id)
  }

  async save (data) {
    return this.dao.save(data)
  }

  async update (id, data) {
    return this.dao.update(id, data)
  }

  async delete (id) {
    return this.dao.delete(id)
  }
}

export default CartDaoRepository
