import { config } from '../../../config/config.js'
import ProductDaoMongo from './productDaoMongo.js'
import ProductDaoMaria from './productDatoMaria.js'

const dataBaseContext = config.dataBase
let dao

switch (dataBaseContext) {
  case 'mongoDB' :
    dao = new ProductDaoMongo()
    break
  case 'mariaDB' :
    dao = new ProductDaoMaria()
    break
}

class ProductDaoFactory {
  static instance = ProductDaoFactory

  constructor () {
    this.hola = ''
  }

  getDao () {
    return dao
  }
}

export default ProductDaoFactory
