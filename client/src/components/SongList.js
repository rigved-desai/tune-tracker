import SongListElement from "./SongListElement";
import ReactLoading from 'react-loading';

function SongList({ props }) {

  return (
    <div style={{
      border: '1px solid rgba(0, 0, 0, 0.1)',
      margin: '40px',
      borderRadius: '20px',
      padding: '5px',
      height: '90vh',
      marginBottom: '10px',
      backgroundColor: '#F8F1F1'
    }}>
      <div className="scroll-box" style={{
        overflowY: 'scroll',
        height: '100%',
      }}>
        <div className="scroll-box-inner">
          <h1 style={{
            marginLeft: '15px'
          }}>Your Songs</h1>
          <ul style={{
            margin: 0,
            padding: 0
          }}>
            {
              props.songList.length === 0 ?
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <ReactLoading type="spin" color="#025464" height={'auto'} />
                </div>
                :
                <ul style={{
                  margin: 0,
                  padding: 0
                }}>
                  {props.songList.map((item) => {
                    return <SongListElement key={item._id} props={item} />
                  })}
                </ul>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SongList;
