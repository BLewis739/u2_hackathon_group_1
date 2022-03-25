import { useState } from 'react'

const CreatePark = (props) => {
  const [addPark, setAddPark] = useState({
    Park: '',
    Location: '',
    Category: '',
    Description: '',
    YearOpened: ''
  })

  console.log(addPark)

  return (
    <div className="addPark">
      <h1>Add Park</h1>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="Park"
          value={addPark.Park}
          placeholder="Park Name"
          onChange={(e) => setAddPark({ ...addPark, Park: e.target.value })}
        ></input>
        <input
          type="text"
          name="Location"
          value={addPark.Location}
          placeholder="Location"
          onChange={(e) => setAddPark({ ...addPark, Location: e.target.value })}
        ></input>
        <input
          type="text"
          name="Category"
          value={addPark.Category}
          placeholder="Category"
          onChange={(e) => setAddPark({ ...addPark, Category: e.target.value })}
        ></input>
        <input
          type="text"
          name="Description"
          value={addPark.Description}
          placeholder="Description"
          onChange={(e) =>
            setAddPark({ ...addPark, Description: e.target.value })
          }
        ></input>
        <input
          type="text"
          name="YearOpened"
          value={addPark.YearOpened}
          placeholder="Year Opened"
          onChange={(e) =>
            setAddPark({ ...addPark, YearOpened: e.target.value })
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
