const createRide = () => {

  return (
    
<form onSubmit={props.onSubmit}>
  
      <input
        type="text"
        name="ride"
        value={props.value}
        placeholder="Name"
        onChange={props.onChange}
      ></input>
      <button className="submitButton" text="Submit">
        Add
      </button>
    </form>
  )

}
export default createRide