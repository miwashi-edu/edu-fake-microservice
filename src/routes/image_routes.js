const express = require('express');
const path = require('path');
const imageController = require('../controllers/image_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Images
 *   description: API to manage images
 */

/**
 * @swagger
 * /images/list-images:
 *   get:
 *     summary: Lists all images
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: A list of images
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *               example: "<html>...</html>"
 */
router.get('/list-images', imageController.listImages);

/**
 * @swagger
 * /images/{imageName}:
 *   get:
 *     summary: Retrieve a single image by name
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: imageName
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the image
 *         examples:
 *           example1:
 *             summary: Elephant
 *             value: "elefant.jpg"
 *           example2:
 *             summary: Gorilla
 *             value: "gorilla.jpg"
 *           example3:
 *             summary: Crocodile
 *             value: "crocodile.jpg"
 *     responses:
 *       200:
 *         description: An image file
 *         content:
 *           image/jpeg:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get('/:imageName', (req, res) => {
    const imagePath = path.join(__dirname, '../../images', req.params.imageName);
    res.sendFile(imagePath);
});

module.exports = router;
