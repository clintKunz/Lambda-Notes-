const express = require('express');

const models = require('../models/models.js');

const router = express.Router();

//Get list of notes
router.get('/notes', (req, res) => {
    models
        .getNotes()
            .then(notes => {
                res.status(200).json(notes);
            })
            .catch(err => res.status(500).json(err));
});

//Create a note with a title and content
router.post('/create', (req, res) => {
    const { title, content, user_id } = req.body;
    const note_title = title;
    const note_content = content; 
    const note = { note_title, note_content, user_id };

    if(!title && !content && !user_id) {
        res.status(406).json({ error: 'req body not acceptable' });
    } else {
        models
            .createNote(note)
                .then(ids => {
                    res.status(201).json(ids[0]);
                })
                .catch(err => res.status(500).json({ error: 'createNote failed', err }));
    }
})

module.exports = router; 