import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="search">
        <h2> Search Result</h2>
        <form>
          <input type='text' name='search' value='' placeholder='search park'
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className="trending"></div>
      <div className="categories">
        <h2>Park Categories</h2>
      </div>
    </div>
  )
}

export default Home