import admin from 'firebase-admin'
import connectionData from '../db.config.js'

admin.initializeApp({
  credential: admin.credential.cert(connectionData.connection_firebase.data),
  databaseURL: 'https://marketapi-f8278.firebaseio.com'
})

console.log('[Firebase}: Connection succesfully')

export const db = admin.firestore()
