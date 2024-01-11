const express = require('express');
const songsController = require('../controllers/songsController');

const songsRouter = express.Router();

songsRouter
    .route("/")
        .get(songsController.getAllSongs);

songsRouter
    .route("/")
        .post(songsController.addNewSong);

songsRouter
    .route("/:songId")
        .get(songsController.getSongById);

module.exports = songsRouter;