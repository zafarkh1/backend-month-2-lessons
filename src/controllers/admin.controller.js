import {readFileCustom} from '../helpers/read-helper.js'

export const adminController = (req, res) => {
	const {id} = req.body

	const admin = readFileCustom('users.json').find(el => el.id == id)

  res.render("admin", {data: admin});
};
