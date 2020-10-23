module.exports = {

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
  }
}



