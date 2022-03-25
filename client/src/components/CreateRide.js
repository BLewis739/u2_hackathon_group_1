import { useState } from 'react'
import axios from 'axios'

const CreateRide = (props) => {
  const [addRide, setaddRide] = useState({
    name: '',
    description: '',
    maxCapacity: '',
    yearBuilt: '',
    rideLength: '',
    park: '',
    img: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/rides', addRide)
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
          value={addRide.name}
          placeholder="Name"
          onChange={(e) => setaddRide({ ...addRide, name: e.target.value })}
        ></input>
        <input
          type="text"
          name="Description"
          value={addRide.description}
          placeholder="Description"
          onChange={(e) =>
            setaddRide({ ...addRide, description: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="Ride"
          value={addRide.maxCapacity}
          placeholder="Max Capacity"
          onChange={(e) =>
            setaddRide({ ...addRide, maxCapacity: e.target.value })
          }
        ></input>
        <input
          type="String"
          name="Year Built"
          value={addRide.yearBuilt}
          placeholder="Year Built"
          onChange={(e) =>
            setaddRide({ ...addRide, yearBuilt: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="Ride Length"
          value={addRide.rideLength}
          placeholder="Ride Length"
          onChange={(e) =>
            setaddRide({ ...addRide, rideLength: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="Ride"
          value={addRide.park}
          placeholder="Park"
          onChange={(e) => setaddRide({ ...addRide, park: e.target.value })}
        ></input>
        <input
          type="text"
          name="Ride"
          value={addRide.img}
          placeholder="Image URL"
          onChange={(e) => setaddRide({ ...addRide, img: e.target.value })}
        ></input>
        <button className="submitButton" text="Submit">
          Add Ride
        </button>
      </form>
    </div>
  )
}
export default CreateRide
