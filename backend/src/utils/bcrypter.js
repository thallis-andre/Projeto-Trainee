const bcrypt = require('bcrypt');

const saltRounds = 12
const salt = bcrypt.genSaltSync(saltRounds)

module.exports = {
  
  hash(password) {
   return bcrypt.hashSync(password ,salt)
  },

  compare(password, userPassword) {
    return bcrypt.compareSync(password, userPassword); 
  }



}