const express = require('express');

const models = require('../models/models.js');

const router = express.Router();

//Get
router.get('/notes', (req, res) => {
    models
        .getNotes()
            .then(notes => {
                res.status(200).json(notes);
            })
            .catch(err => res.status(500).json(err));
});

module.exports = router; 