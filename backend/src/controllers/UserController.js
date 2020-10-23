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
};
