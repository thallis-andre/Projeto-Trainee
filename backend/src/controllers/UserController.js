const User = require('../models/User');
const bcrypter = require('../utils/bcrypter');
const { forbidden, serverError } = require('../errors/http-errors');

module.exports = {
  async create(request, response) {
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
        return forbidden('Usuário já cadastrado.', response);
      }

      return response.json(user);
    } catch (error) {
      return serverError(response);
    }
  },
};
