const Artist = require('../models/artistModel');

const getAllArtists = async () => {
    try {
        const artistsList = await Artist.find().sort({numberOfSongs: -1});
        return artistsList;
    }
    catch(err) {
        console.log("Error fetching artists from database: ", err);
        throw err;
    }
}

const getArtistByName = async (artistName) => {
    try {
        const artist = await Artist.findOne({name: artistName});
        return artist;
    }
    catch(err) {
        console.log("Error fetching artist by id from database: ", err);
        throw err;
    }
}

const getArtistById = async (artistId) => {
    try {
        const artist = await Artist.findById(artistId);
        return artist;
    }
    catch(err) {
        console.log("Error fetching artist by id from database: ", err);
        throw err;
    }
}

const addNewArtist = async(artistName) => {
    try {
        const artist = await Artist.create({name: artistName});
        return artist;
    }
    catch(err) {
        console.log("Error creating new artist: ", err);
        throw err;
    }
}

const updateArtistById = async(artistId, artistDetails) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(artistId, artistDetails);
        return updatedArtist;
    }
    catch(err) {
        console.log("Error updating artist: ", err);
        throw err;
    }
}

module.exports = {getAllArtists, getArtistByName, getArtistById, addNewArtist, updateArtistById};