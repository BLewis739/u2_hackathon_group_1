import waterPark from '../thrills & spills imgs/waterpark/waterPark.jpg'

const ParksCard = (props) => {
  return (
    <div className="parkcards" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.background_image}></img>
      </div>
      <div className="parkcards-info">
        <h3>{props.name}</h3>
        <p>{props.rating}</p>
      </div>
    </div>
  )
}
export default ParksCard
