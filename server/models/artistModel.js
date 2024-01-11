const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide an artist name"],
        unique: true
    },
    numberOfSongs : {
        type: Number,
        required: [true],
        default: 0
    }
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;