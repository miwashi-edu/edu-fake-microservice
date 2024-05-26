const booksDomain = require('../domain/book_handler');

exports.listAllBooks = (req, res) => {
    res.json(booksDomain.listAllBooks());
};

exports.getBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const book = booksDomain.getBookById(bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send({ message: 'Book not found' });
    }
};

exports.createBook = (req, res) => {
    const newBook = booksDomain.createBook(req.body);
    res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const updatedBook = booksDomain.updateBook(bookId, req.body);

    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).send({ message: 'Book not found' });
    }
};

exports.deleteBook = (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const deletedBook = booksDomain.deleteBook(bookId);

    if (deletedBook) {
        res.json(deletedBook);
    } else {
        res.status(404).send({ message: 'Book not found' });
    }
};

