const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const userController = require('./controllers/userController');
const transferController = require('./controllers/transferController');
const authController = require('./controllers/authController');

const app = express();

app.use(express.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/users', userController);
app.use('/transfers', transferController);
app.use('/auth', authController);

module.exports = app;
