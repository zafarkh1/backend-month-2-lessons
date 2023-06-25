import { readFileSync } from "fs";
import { join } from "path";

export const verifyAccess = (req, res, next) => {
  const url = req.url.split("/")[1];

  if (!url.startsWith("sign")) {
    if (!req.headers["authorization"]) {
      return res.status(401).send("Unauthorized");
    }
    const { id } = jwt.verify(req.headers["authorization"], "w8f8ef48v15");

    const user = JSON.parse(
      fs.readFileSync(join(process.cwd(), "src", "data", "users.json"))
    ).find((el) => el.id == id);

    if (!user) {
      return res.status(401).send("User not found");
    }

    req.userId = id;
  }
  next();
};
