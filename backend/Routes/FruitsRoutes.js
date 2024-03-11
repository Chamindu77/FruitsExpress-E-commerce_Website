const express = require('express');
const router = express.Router();
const Fruit = require('../Models/FruitsModel');


router.get('/fruits', async (req, res) => {
    try {
        const allFruits = await Fruit.find();
        res.json(allFruits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/fruits/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const fruit = await Fruit.findById(id);
        if (!fruit) {
            return res.status(404).json({ message: 'Fruit not found' });
        }
        res.json(fruit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/fruits', async (req, res) => {
    const newFruitData = req.body;
    try {
        const createdFruit = await Fruit.create(newFruitData);
        res.status(201).json(createdFruit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/fruits/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedFruit = await Fruit.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedFruit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete('/fruits/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedFruit = await Fruit.findByIdAndRemove(id);
        res.json(deletedFruit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
