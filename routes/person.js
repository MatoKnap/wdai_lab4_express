const express = require('express');
const {PersonSchema} = require("../db");
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'person' });
});

router.get('/all', async (req, res, next) => {
    try {
        const persons = await PersonSchema.findAll();
        res.status(200).json(persons);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const person = await PersonSchema.findByPk(id);
        if (person) {
            res.status(200).json(person);
        } else {
            res.status(404).json({ message: 'Person not found' });
        }
    } catch (error) {
        next(error);
    }
});

router.post('/create', async (req, res, next) => {
    const { name, surname, job } = req.body;
    try {
        const newPerson = await PersonSchema.create({ name, surname, job });
        res.status(201).json(newPerson);
    } catch (error) {
        next(error);
    }
});

module.exports = router;