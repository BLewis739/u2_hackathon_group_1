import { useState } from 'react'
import { axios } from 'axios'

const CreateRide = (props) => {
  const [addRide, setaddRide] = useState({
    Name: '',
    Description: '',
    RideLength: '',
    YearBuilt: 0
  })

  const handleSubmit = () => {
    // e.preventDefault()
    let ride = JSON.stringify(addRide)
    console.log(ride)
    axios
      .post('http://localhost:3001/rides', ride)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))
  }

  console.log(addRide)

  return (
    <div className="createRide">
      <h1>Add Your Ride</h1>
      <form onSubmit={handleSubmit}>
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
          type="String"
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
