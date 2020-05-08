const firebase = require('firebase')
const db = () => firebase.firestore()
module.exports = {
  db
}
