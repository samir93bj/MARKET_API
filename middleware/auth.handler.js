import error from '../utils/error.js'
import { config } from '../config/config.js'

const isAdminRole = (req, res, next) => {
  if (config.admin !== true) {
    throw error('Unauthorized', 401)
  } else {
    next()
  }
}

export { isAdminRole }
