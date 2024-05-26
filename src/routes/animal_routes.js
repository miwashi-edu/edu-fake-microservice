const express = require('express');
const animalController = require('../controllers/animal_controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Animals
 *   description: API to manage animals
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - species
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the animal
 *         name:
 *           type: string
 *           description: The name of the animal
 *         species:
 *           type: string
 *           description: The species of the animal
 *       example:
 *         id: 1
 *         name: Leo
 *         species: Lion
 */

/**
 * @swagger
 * /animals:
 *   get:
 *     summary: Lists all animals
 *     tags: [Animals]
 *     responses:
 *       200:
 *         description: A list of animals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */
router.get('/', animalController.listAllAnimals);

/**
 * @swagger
 * /animals/{animalId}:
 *   get:
 *     summary: Retrieves the animal based on their ID
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: An animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.get('/:animalId', animalController.getAnimalById);

/**
 * @swagger
 * /animals:
 *   post:
 *     summary: Creates an animal
 *     tags: [Animals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       201:
 *         description: The created animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.post('/', animalController.createAnimal);

/**
 * @swagger
 * /animals/{animalId}:
 *   put:
 *     summary: Updates an animal by their ID
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       200:
 *         description: The updated animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.put('/:animalId', animalController.updateAnimal);

/**
 * @swagger
 * /animals/{animalId}:
 *   delete:
 *     summary: Deletes an animal based on their ID
 *     tags: [Animals]
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The deleted animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.delete('/:animalId', animalController.deleteAnimal);

module.exports = router;
