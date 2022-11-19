import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  enviorment: process.env.ENVIORMENT || 'test',
  port: process.env.PORT || 8080,
  admin: true,
  dataBase: 'localStorage',
  mariadb_service: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3306,
    user: process.env.user || 'root',
    password: process.env.PASSWORD || 'root',
    databaseName: process.env.DATABASE_MARIADB || 'eccomerce'
  },
  mongodb: {
    uri: process.env.MONGO_URI
  },
  firebase: {
    data: {
      type: 'service_account',
      project_id: 'marketapi-f8278',
      private_key_id: '40b41da8b36d28f75431023df28b62c763b8a6ee',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCQ9XQJmx0yPtxD\nYastPKMaAZLU12b8IrKAQBoCNDCLSw3TC3+n6LUeo7/fp0DYEhifscu4v2XTINCA\n9uDb5+mfCGx4BoXd7Yu453ErjbTua+/wo98444Reel0MOInvKmnTEi/CVn1tYeKO\ntFK7mmgc+TOQ5G6j6F8IzIvNnGdY5YHPs8HxSblX5tl6WbsFq7cMCGyzkpHoQYRC\nmNnFeRbt5mAH0v4EqW5avIwAmSj57MnnxVwPnRIGs+wsgbp6/71Yqs2zhySyCJtm\nt84Bw+p6I+mHICVR+2A1JKrzxDUe3sQ+XcyAFqSthjX/Xhqe8u5UmvJiWGePfAuL\nRZiO27GzAgMBAAECggEAO7zrlQnXfl1paFtXr8zNamo7mHssdbvW1AOWtFHNr5m+\nmLqkYQ4Flhrld8X1cxYCD821pu05iUh8pKkZAYcRP/i4ur31bP/4FLtMaCZ96cOR\nnhnqZAdfBZBnyCGEtotEETftdqkuB2XPd//YGHgJb+dC2PNKpUGd6IJjGtjZvkg3\n7nLbrN75xbLU+KWletaBt9dJd4B6G7CSOOciYObka1uOrqiy+2dOvpZ8K6Tpd4JU\nkc4MxXY2JwWi+STu+4e7j97W7s6W8nDu5oBYui9XGqyMADoJxXL81Cn/cMZgHpL7\nXH4Z5PY1nJFNGp741swLJU6d4Xkh2OknWpT69DnEAQKBgQDCczTWVAMO1sNQw/RZ\nkLw4L8iTPvfxiVhFnkUU01/RP1sbvMFjsnIj5pvspgaYpY/NrCnQhn2o/OZu5+De\n/QhmPwuod0bGCbPZEi7kxV8o6spe61yoDIOhSJmKIq2GR6xOzJ0WRFo6KqM+NqOt\nEqLW1M3LvtHqPejxyZ5mqQiPVwKBgQC+19f/8G+NCdDHY/HVn3AihAzhM5mMsQJJ\nxlycOZgCLB4hAvX8QPsjRRBLAudK51xDn/sahD3InAqqK65t/XKSU5u+la2CcHIr\nDlLtiMDM/bkF8AdWc5pNalsEqGOQw+g0FZsxDEQM6VenSryrhZf1qqDWG2vEH7ns\nOTHpA6gjBQKBgQCfRqL3FKXUl9Iw6/HRE585Htra0e9ip6/ohrXrUyDfU1gbpkd6\nlIauJY1/EJfCnYrnW6h8qE1yCIXwPnuR7A3fQrEX82vDd9sbaauDtLA34eqWSZAC\nDw4bJE6wOauNnFPlz/C0dpS5pIdGxJbZg7Ri6LkRtWJYzxFqTE41pSvfzQKBgDsu\n7MluYum2NYzgLcs12qyZjvT375J2AmOmpGm+YqmpzN4n8Oj9reROMrNQfzH3deFy\n54hdoltoKNaFHV72zmUakJ4WBO0CuiUoGAeZ9VCdDpgMy/m/eAayCO/02Iu4dXZR\njQM07pWid5Bl2QTINUv2UlKTxmPYAuyDADtm6umRAoGBAJp3FZeoDDVnAVdm3EiO\nlNdtEM2aozejq1EndsZ3NjpbqKI7PLI/9F/QLYVLRe39doyIphZlawSv8GGdBKGo\nyG/ikqJp+X8ptm2V3rbLDCBvDxZOJZm/YGcL0eZ1K2Ku4Dscpn3twOh+6/f/C3u4\n37HAf1N8DcJAlcqep40DOZHv\n-----END PRIVATE KEY-----\n',
      client_email: 'firebase-adminsdk-woqai@marketapi-f8278.iam.gserviceaccount.com',
      client_id: '109621006693755904872',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-woqai%40marketapi-f8278.iam.gserviceaccount.com'
    }
  }
}

export { config }
