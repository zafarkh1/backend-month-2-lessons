import express from "express";
import { config } from "dotenv";
import { PORT } from "./config/app.config.js";
import { readFileCustom } from "./helpers/read-helper.js";
import { writeFileCustom } from "./helpers/write-helper.js";

config();

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send(readFileCustom("books"));
});


app.post("/books", (req, res) => {
  const allBooks = readFileCustom("books");

  allBooks.push({
    id: allBooks.at(-1)?.id + 1 || 1,
    ...req.body,
  });

  writeFileCustom("books", allBooks);

  res.status(201).json({
    message: "Successfully created",
  });
});

app.patch("/books/:id", (req, res) => {
	const {id} = req.params
	const {title, price} = req.body

	const allBooks = readFileCustom('books')

	const book = allBooks.find(e => e.id == id)

	if(!book) {
		return res.status(404).json({
      message: "Book not found",
    });
	}

	book.title = title ? title : book.title
	book.price = price ? price : book.price;

	const bookIndex = allBooks.findIndex(el => el.id == id)

	allBooks.splice(bookIndex, 1, book)
	writeFileCustom('books', allBooks)

	res.status(204).send('Successfully updated')
})

app.delete("/books/:id", (req, res) => {
	const { id } = req.params;

  const allBooks = readFileCustom("books");

  const book = allBooks.find((e) => e.id == id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  const bookIndex = allBooks.findIndex((el) => el.id == id);

  allBooks.splice(bookIndex, 1);
  writeFileCustom("books", allBooks);

  res.status(204).send("Successfully deleted");
})

app.listen(PORT, console.log("waiting ..."));