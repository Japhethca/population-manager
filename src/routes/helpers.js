export function jsonResponse(res, status, data, message) {
  return res.status(status).json({
    status: 'success',
    message,
    data,
  });
}

export function errorResponse(res, status, message, errors) {
  return res.status(status).json({
    status: 'error',
    message,
    errors,
  });
}

export function serverError(res, status = 500) {
  return res.status(status).json({
    status: 'error',
    message: 'There was an internal server errror',
  });
}
