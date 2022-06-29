import { v4 as uuid } from "uuid";

let books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J.K. Rowling"
  }
];

export const getBooks = (req, res) => {
  console.log(`Book List in the database`);

  return res.status(200).json({
    success: true,
    message: `Book List in the database`,
    data: books
  });
};

export const createBook = (req, res) => {
  const book = req.body;
  const newBook = {
    ...book,
    id: uuid()
  };

  books.push(newBook);

  console.log(`Book [${book.title}] added to the database.`);

  res.status(201).json({
    success: true,
    message: `Book [${book.title}] added to the database.`,
    data: book
  });
};

export const getBook = (req, res) => {
  const bookItem = books.find((book) => book.id == req.params.id);

  if (bookItem) {
    res.status(200).json({
      success: true,
      message: `book with id ${req.params.id}`,
      data: bookItem
    });
  } else {
    res.status(500).json({
      message: `book with id ${req.params.id} not found`
    });
  }
};

export const deleteBook = (req, res) => {
  // TODO: answer here
  const bookId = req.params.id;

  if(books.filter(book => book.id == bookId).length > 0){
    books = books.filter(book => book.id != bookId);
    res.status(200).json({
      success: true,
      message: `book with id ${bookId} has been deleted`
    });
  }else{
    res.status(404).json({
      message: `book with id ${bookId} not found`
    });
  }
};

export const updateBook = (req, res) => {
  // TODO: answer here
  const bookId = req.params.id;
  const bookItem = books.find((book) => book.id == bookId);

  if (bookItem) {
    const updatedBook = {
      ...bookItem,
      ...req.body
    };

    books = books.map((book) => (book.id == bookId ? updatedBook : book));

    res.status(200).json({
      success: true,
      message: `title has been updated to ${req.body.title}.author has been updated to ${req.body.author}`,
      data: updatedBook
    });
  } else {
    res.status(500).json({
      message: `book with id ${bookId} not found`
    });
  }

  // console.log(`title has been updated to ${req.body.title}.author has been updated to ${req.body.author}`);

  // const newBookData={};

  // for(let bookData in Object.keys(req.body)){
  //   newBookData[bookData]=req.body[bookData];
  // }

  // res.send(newBookData);
  // res.status(200).json({
  //   success: true,
  //   message: `title has been updated to ${req.body.title}.author has been updated to ${req.body.author}`
  // });
};
