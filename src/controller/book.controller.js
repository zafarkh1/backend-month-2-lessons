import {readFileCustom} from '../helpers/fs.js'

export const bookGetController = (req, res) => {
	const allBooks = readFileCustom('books.json')
  res.render("books", { books: allBooks });
};

export const bookPostController = (req, res) => {
  const allBooks = readFileCustom("books.json");
  res.render("books", { books: allBooks });
};
