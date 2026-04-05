const express = require('express');
const Cinema = require('../models/Cinema');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cinemas = await Cinema.find().populate('movies'); 
        return res.status(200).json(cinemas);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.put('/add-movie', async (req, res) => {
    try {
        const { cinemaId, movieId } = req.body;
        
        
        const updatedCinema = await Cinema.findByIdAndUpdate(
            cinemaId,
            { $push: { movies: movieId } },
            { new: true }
        );
        
        return res.status(200).json(updatedCinema);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Cinema.findByIdAndDelete(id);
        return res.status(200).json('Cine eliminado correctamente');
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;