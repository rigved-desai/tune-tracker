function ArtistElement({ props }) {
  return (
    <div className="list-element" style={{
      listStyleType: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontSize: '24px',
      borderTop: '2px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
    }}>
      <li style={{
        marginLeft: '15px',
        textDecoration: 'none'

      }}>{props.name} : {props.numberOfSongs} {props.numberOfSongs > 1 ? " songs" : " song"}</li>
    </div>
  )
}

export default ArtistElement
