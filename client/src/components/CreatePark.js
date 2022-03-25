import { useState } from 'react'
import axios from 'axios'

const CreatePark = () => {
  const [addPark, setAddPark] = useState({
    name: '',
    location: '',
    category: '',
    img: '',
    description: '',
    yearOpened: ''
  })

  console.log(addPark)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:3001/parks', addPark)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))
  }

  return (
    <div className="addPark">
      <h1>Add Park</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Park"
          value={addPark.name}
          placeholder="Park Name"
          onChange={(e) => setAddPark({ ...addPark, name: e.target.value })}
        ></input>
        <input
          type="text"
          name="Location"
          value={addPark.Location}
          placeholder="Location"
          onChange={(e) => setAddPark({ ...addPark, location: e.target.value })}
        ></input>
        <input
          type="text"
          name="Image"
          value={addPark.img}
          placeholder="img url"
          onChange={(e) => setAddPark({ ...addPark, img: e.target.value })}
        ></input>
        <input
          type="text"
          name="Category"
          value={addPark.category}
          placeholder="Category"
          onChange={(e) => setAddPark({ ...addPark, category: e.target.value })}
        ></input>
        <input
          type="text"
          name="Description"
          value={addPark.description}
          placeholder="Description"
          onChange={(e) =>
            setAddPark({ ...addPark, description: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="YearOpened"
          value={addPark.yearOpened}
          placeholder="Year Opened"
          onChange={(e) =>
            setAddPark({ ...addPark, yearOpened: e.target.value })
          }
        ></input>
        <button className="submitButton" text="Submit">
          Add Park
        </button>
      </form>
    </div>
  )
}
export default CreatePark
