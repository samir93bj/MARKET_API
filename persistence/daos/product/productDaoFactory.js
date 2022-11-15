import { config } from '../../../config/config.js'
import ProductMemoryDao from './productDaoLocalFile.js'
import ProductDaoMongo from './productDaoMongo.js'
import ProductDaoFirestore from './productDatoFirestore.js'

const dataBaseContext = config.dataBase
let dao

switch (dataBaseContext) {
  case 'mongoDB' :
    dao = new ProductDaoMongo()
    break
  case 'firebase' :
    dao = new ProductDaoFirestore()
    break
  case 'localStorage' :
    dao = new ProductMemoryDao()
    break
}

class ProductDaoFactory {
  static instance = ProductDaoFactory

  getDao () {
    return dao
  }
}

export default ProductDaoFactory
