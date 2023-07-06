import {readFileCustom, writeFileCustom} from '../helpers/fs.js'

export const bookGetController = (req, res) => {
	const allBooks = readFileCustom('books.json')
  res.render("books", { books: allBooks });
};

export const bookPostController = (req, res) => {
	const {title, price} = req.body

  const allBooks = readFileCustom("books.json");

	allBooks.push({
		id: allBooks.at(-1)?.id + 1 || 1, price, title
	})
	writeFileCustom('books.json', allBooks)
  res.redirect('/api/books')
};
