import { config } from '../../../config/config.js'
import CartDaoFirebase from './cartDaoFirestore.js'
import CartDaoMemory from './cartDaoLocalFile.js'
import CartDaoMongo from './cartDaoMongo.js'

const dataBaseContext = config.dataBase
let dao

switch (dataBaseContext) {
  case 'mongoDB' :
    dao = new CartDaoMongo()
    break
  case 'firebase' :
    dao = new CartDaoFirebase()
    break
  case 'localStorage' :
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
