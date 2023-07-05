export const schemaValidate = (schema) => {
  return async (req, res, next) => {
    const value = await schema.validateAsync(req.body).catch((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
    req.body = value;
    next();
  };
};
