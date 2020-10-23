const bcrypt = require('bcrypt');

const saltRounds = 12
const salt = bcrypt.genSaltSync(saltRounds)

module.exports = {
  
  hash(password) {
   return bcrypt.hashSync(password ,salt)
  }



}