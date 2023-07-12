import { readFileCustom } from "../helpers/read-helper.js";
import {writeFileCustom} from '../helpers/write-helper.js'

export const homePageController = (req, res) => {
  res.render("home", { data: "" });
};

export const homeController = (req, res) => {
  const { username, password } = req.body;

  const user = readFileCustom("users.json").find(
    (el) => el.password == password && el.username == username
  );

  if (!user) {
    user.push({
			id: user.at(-1)?.id +1 || 1,
			username, password
		})
  }

	writeFileCustom('users.json', user)
	res.status(201).json({
    message: "Successfully created",
  });

}
