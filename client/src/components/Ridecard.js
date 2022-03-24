const RideCard = (props) => {
  return (
    <div className="details-summary" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="404 err"></img>
      </div>
    </div>
  )
}
export default RideCard
