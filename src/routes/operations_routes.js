const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Operations
 *   description: Server operations
 */

/**
 * @swagger
 * /operations/stop:
 *   get:
 *     summary: Stops the server
 *     tags: [Operations]
 *     responses:
 *       200:
 *         description: Server is shutting down
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Server is shutting down...
 */
router.get('/stop', (req, res) => {
    process.kill(process.pid, 'SIGTERM'); // Emit SIGTERM to trigger graceful shutdown
    res.send('Server is shutting down...');
});


module.exports = router;
