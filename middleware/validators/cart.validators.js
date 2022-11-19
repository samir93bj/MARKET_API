import { check } from 'express-validator'
import { validarCampos } from './validate-camp'

const validationAddProduct = [
  check('idCart', 'id product is required').not().isEmpty(),
  check('idCart', 'No es un ID valido').not().isString(),
  validarCampos()
]

export { validationAddProduct }
