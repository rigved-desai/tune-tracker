require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const songsRouter = require('./routes/songsRouter');
const artistsRouter = require('./routes/artistsRouter');

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

const connectWithRetry = () => {
    mongoose
        .connect(MONGO_URL)
        .then(() => console.log("Successfully connected to DB"))
        .catch((e) => {
            console.log(e)
            setTimeout(connectWithRetry, 5000)
});
};
connectWithRetry();

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json({urlencoded: true}));


app.use("/songs", songsRouter);
app.use("/artists", artistsRouter);

app.listen(PORT, () => {
    console.log("App is litening on PORT:", PORT);
});