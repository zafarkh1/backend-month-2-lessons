import {readFileCustom} from '../helpers/read-helper.js'
import jwt from 'jsonwebtoken'

export const authPageController = (req, res) => {
	res.render('auth', {data: ''})
}

export const authController = (req, res) => {
	const {username, password} = req.body

	const user = readFileCustom('users.json').find(el => el.password == password && el.username == username)

	if(!user) {
		return res.render('auth', {
			data: "Unauthorized"
		})
	}

	if (user.role == "super-admin") {
		res.cookie(
      "accessToken",
      jwt.sign(
        {
          id: user.id,
        },
        "1q2w3e"
      )
    );
    res.redirect("/api/admin");
  } else {
		res.cookie(
      "accessToken",
      jwt.sign(
        {
          id: user.id,
        },
        "1q2w3e"
      )
    );
    res.redirect("/api/user");
  }
}