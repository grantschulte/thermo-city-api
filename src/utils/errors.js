function errorHandler (error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }
  res.status(500);
  res.json({ error });
}

module.exports = { errorHandler };
