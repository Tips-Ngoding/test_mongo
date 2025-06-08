const bookRepository = require('../repositories/bookRepository');

const getAllBooks = async () => await bookRepository.getAllBooks();
const getBookById = async (id) => await bookRepository.getBookById(id);
const createBook = async (data) => await bookRepository.createBook(data);
const updateBook = async (id, data) => await bookRepository.updateBook(id, data);
const deleteBook = async (id) => await bookRepository.deleteBook(id);

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
