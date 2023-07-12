import jwt from 'jsonwebtoken'

export const verifyMiddleware = (req, res, next) => {
	const {accessToken} = req.cookies

	const { id } = jwt.verify(accessToken, "1q2w3e");

	req.body.id = id

	next()
}