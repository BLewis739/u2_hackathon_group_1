const CreateRide = (props) => {
  return (
<<<<<<< HEAD
    <div className="createRide">
      <h1>Add Your Ride</h1>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="Ride"
          value={props.value}
          placeholder="Name"
          onChange={props.onChange}
        ></input>
        <input
          type="text"
          name="Description"
          value={props.value}
          placeholder="Description"
          onChange={props.onChange}
        ></input>
        <input
          type="text"
          name="Ride Length"
          value={props.value}
          placeholder="Ride Length"
          onChange={props.onChange}
        ></input>
        <input
          type="text"
          name="Year Built"
          value={props.value}
          placeholder="Year Built"
          onChange={props.onChange}
        ></input>
        <button className="submitButton" text="Submit">
          Add
        </button>
      </form>
    </div>
=======
    
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
>>>>>>> c5688f903604bb58b2196588aee35481e35851e3
  )
}
export default CreateRide
