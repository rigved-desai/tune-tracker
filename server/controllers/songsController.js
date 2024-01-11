const songsManager = require('../services/songsManager');

const getAllSongs = async(req, res, next) => {
    try {
        const songsList = await songsManager.getAllSongs();
        return res.status(200).json({
            count: songsList.length,
            results: songsList
        });
    }
    catch(err) {
        return res.status(500).json({
            error: "Server Error"
        });
    }
};

const getSongById = async (req, res, next) => {
    try {
        const {songId} = req.params;
        const songDetails = await songsManager.getSongDetailsById(songId);
        if(!songDetails) {
            return res.status(404).json({
                error: "Song with given ID does not exist!"
            });
        }
        return res.status(200).json(songDetails);
    }
    catch(err) {
        return res.status(500).json({
            error: "Server Error!"
        });
    }
}

const addNewSong = async(req, res, next) => {
    try {
        const {songTitle, artistName} = req.body;
        if(await songsManager.checkIfSongExists(songTitle, artistName)) {
            return res.status(409).json({
                error: "Song already exists!"
            });
        }
        const newSong = await songsManager.addNewSong(songTitle, artistName);
        return res.status(201).json(newSong); 
    }
    catch(err) {
        return res.status(500).json({
            error: err
        });
    }
};

module.exports = {getAllSongs, getSongById, addNewSong};