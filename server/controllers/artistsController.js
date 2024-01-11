const artistManager = require('../services/artistManager');

const getAllArtists = async (req, res, next) => {
    try {
        const artistList = await artistManager.getAllArtists();
        return res.status(200).json({
            count: artistList.length,
            results: artistList
        });
    }
    catch(err) {
        return res.status(500).json({
            error: "Server Error"
        });
    }
};

module.exports = {getAllArtists};