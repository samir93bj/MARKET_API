import error from '../utils/error.js'

class ProductService {
  constructor (nameFile) {
    this.nameFile = nameFile
  }

  async readFile () {
    throw error('Not found', 400)
  }

  async list () {
    const productos = [{ id: 1, name: 'Samir' }, { id: 2, name: 'Martin' }]
    return productos
  }
}

export default ProductService
