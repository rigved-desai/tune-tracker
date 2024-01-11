const Song = require('../models/songModel');
const artistManager = require('../services/artistManager');

const getAllSongs = async () => {
    try {
        const songsList =  await Song.find();
        return songsList;   
    }
    catch(err) {
        console.log("Error fetching all songs from DB: ", err);
        throw err;
    }
};

const getSongDetailsById = async(songId) => {
    try {
        const songDetails = await Song.findById(songId);
        if(!songDetails) {
            return null;
        }
        const artistId = songDetails.artistId;
        const artist = await artistManager.getArtistById(artistId);
        return {
            title: songDetails.title,
            artist: artist.name
        }
    }
    catch(err) {
        console.log("Error fetching all details by id: ", err);
        throw err;
    }
}; 

const addNewSong = async(songTitle, artistName) => {
    try {
        let artist = await artistManager.getArtistByName(artistName);
        if(!artist) {
            artist = await artistManager.addNewArtist(artistName);
        }
        const newSong = await Song.create({title: songTitle, artistId: artist._id});
        await artistManager.updateArtistById(artist._id, {numberOfSongs: artist.numberOfSongs + 1});
        return newSong;
    }
    catch(err) {
        console.log("Error adding new song to database", err);
        throw err;
    }
};

const checkIfSongExists = async(songTitle, artistName) => {
    try {
        const artist = await artistManager.getArtistByName(artistName);
        if(!artist) return false;
        const song = await Song.findOne({title: songTitle, artistId: artist._id});
        return song !== null;
    }
    catch(err) {
        console.log("Error looking up for song duplicates!", err);
        throw err;
    }
}

module.exports = {getAllSongs, getSongDetailsById, addNewSong, checkIfSongExists};