function SongListElement({ props }) {
  return (
    <a href={`/${props._id}`}>
      <div className="list-element" style={{
        listStyleType: 'none',
        paddingTop: '10px',
        paddingBottom: '10px',
        fontSize: '28px',
        borderTop: '2px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'row'
      }}>
        <img style={{
          marginLeft: '10px'
        }} src="/music.jpg" alt="" height={40} />
        <li style={{
          marginLeft: '15px'
        }}>{props.title}</li>
      </div>
    </a>
  )
}

export default SongListElement
