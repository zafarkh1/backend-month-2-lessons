import { readFileCustom } from "../helpers/read-helper.js";
import { writeFileCustom } from "../helpers/write-helper.js";

export const bookGetController = (_, res) => {
  res.send(readFileCustom("books"));
};

export const bookCreateController = (req, res) => {
  const allBooks = readFileCustom("books");

  allBooks.push({
    id: allBooks.at(-1)?.id + 1 || 1,
    ...req.body,
  });

  writeFileCustom("books", allBooks);

  res.status(201).json({
    message: "Successfully created",
  });
};

export const bookUpdateController = (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;

  const allBooks = readFileCustom("books");

  const book = allBooks.find((e) => e.id == id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  book.title = title ? title : book.title;
  book.price = price ? price : book.price;

  const bookIndex = allBooks.findIndex((el) => el.id == id);

  allBooks.splice(bookIndex, 1, book);
  writeFileCustom("books", allBooks);

  res.status(204).send("Successfully updated");
};

export const bookDeleteController = (req, res) => {
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
};