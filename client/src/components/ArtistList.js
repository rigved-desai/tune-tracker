import ArtistElement from "./ArtistElement";
import ReactLoading from 'react-loading';

function ArtistList({ props }) {

  return (
    <div style={{
      border: '1px solid rgba(0, 0, 0, 0.1)',
      margin: '40px',
      borderRadius: '20px',
      padding: '5px',
      marginBottom: '20px',
      backgroundColor: '#F8F1F1',
      height: '52vh'
    }}>
      <div className="scroll-box" style={{
        overflowY: 'scroll',
        height: '100%',
      }}>
        <div className="scroll-box-inner">
          <h1 style={{
            marginLeft: '15px'
          }}>Your Top Artists</h1>
          {
            props.artistList.length === 0 ?
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
                {props.artistList.map((item) => {
                  return <ArtistElement key={item._id} props={item} />
                })}
              </ul>
          }
        </div>
      </div>
    </div>
  );
}

export default ArtistList;