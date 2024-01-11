import axios from "axios";
import { useEffect, useState } from "react";
import ArtistList from "./ArtistList";
import NewSongForm from "./NewSongForm";
import SongList from "./SongList";

function HomePage() {

    const [songList, setSongList] = useState([]);
    const [artistList, setArtistList] = useState([]);

    const updateSongList = (newSong) => {
        setSongList((prevData) => [...prevData, newSong]);
    }

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await Promise.all([
                    await axios.get(`${SERVER_URL}/artists`),
                    await axios.get(`${SERVER_URL}/songs`)
                ]);
                setArtistList(result[0].data.results);
                setSongList(result[1].data.results);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '3fr 1fr',
                height: '100vh'
            }}>
                <SongList style={{
                    gridColumnStart: 1
                }}
                    props={{
                        songList: songList
                    }}
                />
                <div style={{
                    height: '75%',
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <ArtistList
                        props={{
                            artistList: artistList
                        }}
                    />
                    <NewSongForm
                        props={{
                            updateSongList: updateSongList,
                            updateArtistList: setArtistList
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default HomePage
