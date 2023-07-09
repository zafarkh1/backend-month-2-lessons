export const fileUploadController = (req, res) => {
	console.log(req.body, req.file);
	res.send('Send file')
}