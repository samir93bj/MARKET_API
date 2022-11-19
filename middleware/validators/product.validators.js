import { check, param } from 'express-validator'
import { validarCampos } from './validate-camp.js'

const validationCreate = [
  check('name', 'Name is required').not().isEmpty().escape(),
  check('description', 'Description is required').not().isEmpty().escape(),
  check('code', 'Code is required').not().isEmpty().escape(),
  check('image', 'Image is required').not().isEmpty(),
  check('image', 'Image is URL').isURL(),
  check('price', 'Price is required ').not().isEmpty(),
  check('price', 'Price value numeric between 10 and 150000').not().isString(),
  check('stock', 'Stock is required').not().isEmpty(),
  check('stock', 'Stock value numeric between 10 and 10000').not().isString(),
  validarCampos
]

const updateProduct = [
  param('id', 'Id no es valido').isInt(),
  check('name', 'Name is required').escape(),
  check('description', 'Description is required').escape(),
  check('code', 'Code is required').escape(),
  check('image', 'Image is URL').isURL(),
  check('price', 'Price value numeric between 10 and 150000').not().isString(),
  check('stock', 'Stock value numeric between 10 and 10000').not().isString(),
  validarCampos
]

const deleteProduct = [
  param('id', 'Id no es valido').isInt(),
  validarCampos
]

const getProduct = [
  param('id', 'Id no es valido').isInt(),
  validarCampos
]

export { validationCreate, updateProduct, deleteProduct, getProduct }
