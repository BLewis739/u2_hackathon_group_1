

const CreateRide = (props) => {

  return (
    
<form onSubmit={props.onSubmit}>
  
      <input
        type="text"
        name="Ride Name"
        value={props.value}
        placeholder="Name"
        onChange={props.onChange}>
      </input>
      <input
        type="text"
        name="Description"
        value={props.value}
        placeholder="Description"
        onChange={props.onChange}>
      </input>
      <input
        type="text"
        name="Ride Length"
        value={props.value}
        placeholder="Ride Length"
        onChange={props.onChange}>
      </input>
      <input
        type="text"
        name="Year Built"
        value={props.value}
        placeholder="Year Built"
        onChange={props.onChange}>
      </input>
      <button className="submitButton" text="Submit">
        Add Ride
      </button>
    </form>
  )

}
export default CreateRide