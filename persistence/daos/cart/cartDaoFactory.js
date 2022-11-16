import { config } from '../../../config/config.js'

const dataBaseContext = config.dataBase
let dao

switch (dataBaseContext) {
  case 'mongoDB' :
    // eslint-disable-next-line no-case-declarations
    const { CartDaoMongo } = await import('./cartDaoMongo.js')
    dao = new CartDaoMongo()
    break
  case 'firebase' :
    // eslint-disable-next-line no-case-declarations
    const { CartDaoFirebase } = await import('./cartDaoFirestore.js')
    dao = new CartDaoFirebase()
    break
  case 'localStorage' :
    // eslint-disable-next-line no-case-declarations
    const { CartDaoMemory } = await import('./cartDaoLocalFile.js')
    dao = new CartDaoMemory()
    break
}

class CartDaoFactory {
  static instance = CartDaoFactory

  getDao () {
    return dao
  }
}

export default CartDaoFactory
