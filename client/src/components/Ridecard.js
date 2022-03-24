const RideCard = (props) => {

  return (
    <div className='ridecard' onClick={props.onClick}>
      <div className='img-wrapper'>
        <img src={props.image} alt='404 err'></img>

      </div>
      <div className='ridecard-info'>
        
      </div>
      
    </div>

  )
}
export default RideCard