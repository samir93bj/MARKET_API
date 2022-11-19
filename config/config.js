import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  enviorment: process.env.ENVIORMENT || 'test',
  port: process.env.PORT || 8080,
  admin: true,
  dataBase: 'localStorage',
  mongodb: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017'
  },
  firebase: {
    data: {
      type: process.env.FIREBASE_TYPE,
      project_id: process.env.FIREBASE_PROJECT,
      private_key_id: process.env.FIREBASE_PRIVATEKEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_CL_EMAIL,
      client_id: process.env.FIREBASE_CL_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri: process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER,
      client_x509_cert_url: process.env.FIREBASE_CL_CERTURL
    }
  }
}

export { config }
