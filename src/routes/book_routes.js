const express = require('express');
const bookController = require('../controllers/book_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API to manage books
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: 1
 *         title: Example Book
 *         author: Author Name
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Lists all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', bookController.listAllBooks);

/**
 * @swagger
 * /books/{bookId}:
 *   get:
 *     summary: Retrieves the book based on their ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: A book object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.get('/:bookId', bookController.getBookById);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Creates a book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The created book object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.post('/', bookController.createBook);

/**
 * @swagger
 * /books/{bookId}:
 *   put:
 *     summary: Updates a book by their ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The updated book object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.put('/:bookId', bookController.updateBook);

/**
 * @swagger
 * /books/{bookId}:
 *   delete:
 *     summary: Deletes a book based on their ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The deleted book object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;
