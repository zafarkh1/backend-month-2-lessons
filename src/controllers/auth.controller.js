import { readFileSync } from "fs";
import { join } from "path";
import jwt from "jsonwebtoken";

export const signInController = (req, res) => {
  const { username, password } = req.body;

  const user = JSON.parse(
    readFileSync(join(process.cwd(), "src", "data", "users.json"))
  ).find((el) => el.username == username && el.password == password);

  if (!user) {
    return res.status(401).send("User not found");
  }

  res.json({
    message: "Successfully signed in",
    accessToken: jwt.sign({ id: user.id }, "w8f8ef48v15"),
  });
};
