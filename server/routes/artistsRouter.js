const express = require('express');
const artistController = require('../controllers/artistsController');

const artistsRouter = express.Router();

artistsRouter
    .route("/")
        .get(artistController.getAllArtists);

module.exports = artistsRouter;