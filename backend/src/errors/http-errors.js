const badRequest = (campo, response) => {
  return response.json({
    error: true,
    satusCode: 400,
    message: `Campo ${campo} não informado`,
  });
};

const forbidden = (message, response) => {
  return response.json({
    error: true,
    satusCode: 403,
    message: message,
  });
};

const serverError = (response) => {
  return response.json({
    error: true,
    satusCode: 500,
    message: 'Erro interno do servidor, tente novamente.',
  });
};

module.exports = { badRequest, forbidden, serverError };
