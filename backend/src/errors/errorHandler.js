module.exports = {

  badRequest(message, response) {
    return response.json({
      error: true,
      satusCode: 400,
      message: message,
    });
  },
  
  forbidden(message, response) {
    return response.json({
      error: true,
      satusCode: 403,
      message: message,
    });
  },
  
  serverError(response) {
    return response.json({
      error: true,
      satusCode: 500,
      message: 'Erro interno do servidor, tente novamente.',
    });
  },

  success(message, response, token, user) {
    return response.json({
      error: false,
      satusCode: 200,
      message: message,
      token,
      user
    });
  },
}



