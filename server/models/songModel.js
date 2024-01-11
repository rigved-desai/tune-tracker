const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must provide a song name"]
    },
    artistId: {
        type: String,
        required: [true]
    }
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;