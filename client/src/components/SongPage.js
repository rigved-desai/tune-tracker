import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';

function SongPage() {

    const [songDetails, setSongDetails] = useState(null);

    const { songID } = useParams();
    const navigate = useNavigate();

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const fetchSongDetails = async () => {
            try {
                const result = await axios.get(`${SERVER_URL}/songs/${songID}`);
                setSongDetails(result.data);
            }
            catch (err) {
                navigate('/');
            }
        }
        fetchSongDetails();
    }, [songID])

    return (
        <>{
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                {
                    songDetails ?
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            textAlign: 'center',
                            padding: '20px',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '20px',
                            backgroundColor: '#F8F1F1'
                        }}>
                            <img src="/music.jpg" alt="" height={500} />
                            <h1>{songDetails.title}</h1>
                            <h2>{songDetails.artist}</h2>
                        </div> :
                        <ReactLoading type="spin" />
                }
            </div>
        }</>
    )
}

export default SongPage
