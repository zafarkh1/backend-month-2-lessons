import { readFileCustom } from "../helpers/read-helper.js";
import { writeFileCustom } from "../helpers/write-helper.js";

export const fileUploadController = (req, res) => {
  const { username } = req.body;
  // const {path} = req.file;

  const allUsers = readFileCustom("users.json");

  allUsers.push({
    id: allUsers.at?.id + 1 || 1,
    username,
    // image: path.replace('src', '')
    images: req.files.map((el) => {
      return el.path.replace("src", "");
    }),
  });

  writeFileCustom("users.json", allUsers);
  console.log(req.body, req.file);
  res.redirect("/api/user");
};
