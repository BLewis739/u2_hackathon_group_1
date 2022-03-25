import { useState } from 'react'

const CreateRide = (props) => {
  const [addRide, setaddRide] = useState({
    Name: '',
    Description: '',
    RideLength: '',
    YearBuilt: ''
  })

  return (
    <div className="createRide">
      <h1>Add Your Ride</h1>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="Ride"
          value={addRide.Name}
          placeholder="Name"
          onChange={(e) => setaddRide({ ...addRide, Name: e.target.value })}
        ></input>
        <input
          type="text"
          name="Description"
          value={addRide.Description}
          placeholder="Description"
          onChange={(e) =>
            setaddRide({ ...addRide, Description: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="Ride Length"
          value={addRide.RideLength}
          placeholder="Ride Length"
          onChange={(e) =>
            setaddRide({ ...addRide, RideLength: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="Year Built"
          value={addRide.YearBuilt}
          placeholder="Year Built"
          onChange={(e) =>
            setaddRide({ ...addRide, YearBuilt: e.target.value })
          }
        ></input>
        <button className="submitButton" text="Submit">
          Add Ride
        </button>
      </form>
    </div>
  )
}
export default CreateRide
