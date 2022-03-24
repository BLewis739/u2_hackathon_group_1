const ParksCard = (props) => {
  return (
    <div className="parkcards" onClick={props.onClick}>
      <div className="parkcards-info">
        <h3>{props.name}</h3>
        <p>{props.rating}</p>
      </div>
      <div className="img-wrapper">
        <img src={props.img}></img>
      </div>
    </div>
  )
}
export default ParksCard
