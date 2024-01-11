import axios from 'axios';
import { useState } from 'react';
import ReactLoading from 'react-loading';

function NewSongForm({ props }) {

  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [loading, setLoading] = useState(false);
  const updateSongList = props.updateSongList;
  const updateArtistList = props.updateArtistList;
  const [error, setError] = useState(null);

  const createNewSong = async (e) => {
    e.preventDefault();
    setError(null);
    const newSongDetails = { songTitle, artistName };
    try {
      setLoading(true);
      const newSong = await axios.post('http://localhost:4000/songs', newSongDetails);
      const newArtistList = await axios.get('http://localhost:4000/artists');
      updateArtistList(newArtistList.data.results);
      updateSongList(newSong.data);
      setSongTitle('');
      setArtistName('');
    }
    catch (err) {
      if (axios.isAxiosError(err) && err.response.status === 409) {
        setError("Song already exists!");
      }
      else setError("Some error ocurred while making the request.");
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      marginTop: '40px',
      marginRight: '40px',
      marginLeft: '40px',
      padding: '10px',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      backgroundColor: '#F8F1F1'
    }}>
      <div style={{
        marginLeft: '15px'
      }}>
        <h1>Add New Song</h1>
        <form onSubmit={createNewSong}>
          <input style={{
            padding: '10px',
            marginBottom: '10px',
            fontSize: '18px',
            border: '2px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '5px'
          }} placeholder='Song Title' onChange={(event) => setSongTitle(event.target.value)} id='song-title' type={'text'}></input>
          <br />
          <input style={{
            padding: '10px',
            marginBottom: '10px',
            fontSize: '18px',
            border: '2px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '5px'

          }} placeholder='Artist Name' onChange={(event) => setArtistName(event.target.value)} id='artist-name' type={'text'}></input>
          <br />
          {
            loading ?
              <ReactLoading type='spin' /> :
              <button style={{
                padding: '10px',
                marginTop: '10px',
                marginBottom: '10px',
                fontSize: '18px',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '5px',
                color: 'white',
                backgroundColor: '#025464',
                cursor: 'pointer'
              }}>Add Song</button>
          }
          {
            error ?
              <h3>{error}</h3> :
              <></>
          }
        </form>
      </div>
    </div>
  )
}

export default NewSongForm
