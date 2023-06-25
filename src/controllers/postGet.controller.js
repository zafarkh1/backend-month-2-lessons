import { readFileSync } from "fs";
import { join } from "path";
import { Exceptions } from "../exception/not-found-exception.js";

export const postController = (req, res) => {
  const userId = req.userId;

  const userPosts = JSON.parse(
    fs.readFileSync(join(process.cwd(), "src", "data", "posts.json"))
  ).filter((el) => el.userId == userId && delete el.userId);

  if (!userPosts.length) {
    throw new Exceptions("Posts not found");
  }

  res.json(userPosts);
};
