import { readFileCustom } from "../helpers/read-helper.js";

export const userController = (req, res) => {
  const { id } = req.body;

  const user = readFileCustom("users.json").find((el) => el.id == id);

  res.render("user", { data: user });
};