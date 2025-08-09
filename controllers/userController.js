const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    try {
        userService.registerUser(username, password);
        res.status(200).send('Usuário registrado com sucesso');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// User login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    try {
        userService.loginUser(username, password);
        res.status(200).send('Login realizado com sucesso');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Add favorite
router.post('/:username/favorites', (req, res) => {
    const { username } = req.params;
    const { favorite } = req.body;
    try {
        userService.addFavorite(username, favorite);
        res.status(200).send('Favorito adicionado com sucesso');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get all users
router.get('/', (req, res) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
