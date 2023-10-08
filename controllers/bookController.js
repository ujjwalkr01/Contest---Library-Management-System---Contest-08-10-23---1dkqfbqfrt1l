const Book = require("../models/bookModel");

// const getAllBooks = async (req, res) => {
//   try {
//     // TODO: Implement logic to fetch all books from the database
//     // Example response when books are found:
//     // res.status(200).json(books);
//     // Example response when no books are found:
//     // res.status(404).json({ message: 'No books found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const getAllBooks = async (req, res) => {
  try {
    // Retrieve all books from the database
    const books = await Book.find();

    if (books.length > 0) {
      // If books are found, respond with a 200 status and the list of books
      res.status(200).json(books);
    } else {
      // If no books are found, respond with a 404 status and a message
      res.status(404).json({ message: "No books found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const getBookById = async (req, res) => {
//   const bookId = req.params.id;

//   try {
//     // TODO: Implement logic to fetch a book by ID from the database
//     // Use Book.findById(bookId) to retrieve a book
//     // Example response when book is found:
//     // res.status(200).json(book);
//     // Example response when book is not found:
//     // res.status(404).json({ message: 'Book not found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    // Use Book.findById(bookId) to retrieve a book by its ID
    const book = await Book.findById(bookId);

    if (book) {
      // If a book with the specified ID is found, respond with a 200 status and the book
      res.status(200).json(book);
    } else {
      // If no book is found for the given ID, respond with a 404 status and a message
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const addBook = async (req, res) => {
//   const { title, author, ISBN, publishedYear, genre, copiesAvailable } =
//     req.body;

//   try {
//     // TODO: Implement logic to create and add a new book to the database
//     // Use Book.create() to create a new book
//     // Example response when book is added successfully:
//     // res.status(201).json({ message: 'Book added successfully', book });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const addBook = async (req, res) => {
  const { title, author, ISBN, publishedYear, genre, copiesAvailable } =
    req.body;

  try {
    // Use Book.create() to create a new book
    const newBook = await Book.create({
      title,
      author,
      ISBN,
      publishedYear,
      genre,
      copiesAvailable,
    });

    // Respond with a 201 status and a success message
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const updateBook = async (req, res) => {
//   const bookId = req.params.id;
//   const updateInfo = req.body;

//   try {
//     // TODO: Implement logic to update a book by ID in the database
//     // Use Book.findByIdAndUpdate(bookId, updateInfo, { new: true }) to update the book
//     // Example response when book is updated successfully:
//     // res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
//     // Example response when book is not found:
//     // res.status(404).json({ message: 'Book not found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const updateInfo = req.body;

  try {
    // Use Book.findByIdAndUpdate(bookId, updateInfo, { new: true }) to update the book
    const updatedBook = await Book.findByIdAndUpdate(bookId, updateInfo, {
      new: true,
    });

    if (updatedBook) {
      // If a book with the specified ID is found and updated, respond with a 200 status and the updated book
      res
        .status(200)
        .json({ message: "Book updated successfully", book: updatedBook });
    } else {
      // If no book is found for the given ID, respond with a 404 status and a message
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const deleteBook = async (req, res) => {
//   const bookId = req.params.id;

//   try {
//     // TODO: Implement logic to delete a book by ID from the database
//     // Use Book.findByIdAndDelete(bookId) to delete the book
//     // Example response when book is deleted successfully:
//     // res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
//     // Example response when book is not found:
//     // res.status(404).json({ message: 'Book not found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    // Use Book.findByIdAndDelete(bookId) to delete the book
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (deletedBook) {
      // If a book with the specified ID is found and deleted, respond with a 200 status and the deleted book
      res
        .status(200)
        .json({ message: "Book deleted successfully", book: deletedBook });
    } else {
      // If no book is found for the given ID, respond with a 404 status and a message
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
