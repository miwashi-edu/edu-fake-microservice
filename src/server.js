const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');
const animalRoutes = require('./routes/animal_routes');
const imageRoutes = require('./routes/image_routes');
const operationsRouter = require('./routes/operations_routes');

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Animal App API',
      version: '1.0.0',
      description: 'API to manage animal information and images',
    },
    servers: [
      {
        url: `http://localhost:3000`,
      },
    ],
  },
  apis: ['./src/routes/*.js'], // path to the API docs
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/animals', animalRoutes);
app.use('/images', imageRoutes);
app.use('/operations', operationsRouter);  // Integrate the operations routes

// Serve images as static content
app.use('/images', express.static(path.join(__dirname, '../images')));

// Catch-all route to redirect to API docs
app.use('*', (req, res) => {
  res.redirect('/api-docs');
});

module.exports = app;
