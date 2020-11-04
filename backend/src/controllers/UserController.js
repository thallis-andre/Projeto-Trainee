const jwt = require('jsonwebtoken')

const User = require('../models/User');
const bcrypter = require('../utils/bcrypter');
const errorHandler = require('../errors/errorHandler');

module.exports = {
  async register(request, response) {
    try {
      const { name, email, password, image } = request.body;

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({
          name,
          email,
          password: bcrypter.hash(password),
          image,
        });
        
      } else {
        return errorHandler.forbidden('Usuário já cadastrado.', response);
      }

      return response.json(user);
    } catch (error) {
      return errorHandler.serverError(response);
    }
  },

  async login(request, response) {
    try {
      const {email, password} = request.body;

      let user = await User.findOne({ email });

      if (user) {
        const passwordCompare = bcrypter.compare(password, user.password)
        if(passwordCompare) {
          
          const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
          }, 'somepass', {expiresIn: '60m'})

          const userFront = {
            name: user.name,
            email: user.email,
            image: user.image,
          }
          return errorHandler.success('Usuário logado com sucesso', response, token, userFront);

        }else {
          return errorHandler.badRequest('Combinação de e-mail / senha inválida', response);
        }

      } else {
        return errorHandler.badRequest('Combinação de e-mail / senha inválida', response);
      }
    } catch (error) {
      return errorHandler.serverError(response);
    }
  },

  async uploadImage(request, response) {
    const { location: url = '' } = request.files[0];
    const { email} = request.body;

    const user = await User.findOneAndUpdate({ email }, { image: url });

    return response.json(user);
  },
};
