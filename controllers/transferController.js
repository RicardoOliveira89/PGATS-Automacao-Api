const express = require('express');
const router = express.Router();
const transferService = require('../services/transferService');

// Make a transfer
router.post('/', (req, res) => {
    const { from, to, amount } = req.body;
    try {
        transferService.makeTransfer(from, to, amount);
        res.status(200).send('Transferência realizada com sucesso');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all transfers
router.get('/', (req, res) => {
    try {
        const transfers = transferService.getAllTransfers();
        res.status(200).json(transfers);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Get transfer by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const transfer = transferService.getTransferById(id);
        if (!transfer) {
            return res.status(404).send('Transferência não encontrada');
        }
        res.status(200).json(transfer);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
