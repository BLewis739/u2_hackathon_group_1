const CreatePark = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="Park"
        value={props.value}
        placeholder="Park Name"
        onChange={props.onChange}
      ></input>
      <input
        type="text"
        name="Location"
        value={props.value}
        placeholder="Location"
        onChange={props.onChange}
      ></input>
      <input
        type="text"
        name="Category"
        value={props.value}
        placeholder="Category"
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
        name="Year Opened"
        value={props.value}
        placeholder="Year Opened"
        onChange={props.onChange}
      ></input>
      <button className="submitButton" text="Submit">
        Add Park
      </button>
    </form>
  )
}
export default CreatePark
