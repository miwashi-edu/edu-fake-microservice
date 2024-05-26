let book_handler = [
    {
        id: 1,
        title: "Example Book 1",
        author: "Author 1"
    },
    {
        id: 2,
        title: "Example Book 2",
        author: "Author 2"
    }
    // ... other books ...
];

function listAllBooks() {
    return book_handler;
}

function getBookById(bookId) {
    return book_handler.find(b => b.id === bookId);
}

function createBook(newBook) {
    newBook.id = book_handler.length + 1;  // Simple ID generation
    book_handler.push(newBook);
    return newBook;
}

function updateBook(bookId, updatedBook) {
    const index = book_handler.findIndex(b => b.id === bookId);

    if (index !== -1) {
        book_handler[index] = { ...book_handler[index], ...updatedBook };
        return book_handler[index];
    }
    return null;
}

function deleteBook(bookId) {
    const index = book_handler.findIndex(b => b.id === bookId);
    
    if (index !== -1) {
        return book_handler.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    listAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
