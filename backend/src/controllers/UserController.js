const User = require('../models/User');

module.exports = {
  async create(request, response) {
    const { name, email, password, image } = request.body;

    let user = await User.findOne({email});

    if (!user) {
      user = await User.create({
        name,
        email,
        password,
        image,
      });
    }

    return response.json(user);
  },
};
