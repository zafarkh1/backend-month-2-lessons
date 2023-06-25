export const exceptionHandler = (err, req, res, next) => {
	res.status(err?.status || 500).send({
    name: err?.constructor.name || "InternalServerErrorException",
    message: err?.message || "InternalServerError",
  });
	next()
}