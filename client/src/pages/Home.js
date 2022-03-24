import React from 'react'
import ParksCard from '../components/Parkscard'

const Home = () => {
  return (
    <div>
      <div className="search">
        <h2> Search Result</h2>
        <form>
          <input
            type="text"
            name="search"
            value=""
            placeholder="search park"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="trending">
        <ParksCard />
        <ParksCard />
        <ParksCard />
      </div>
      <div className="categories">
        <h2>Park Categories</h2>
        <section>
          <ParksCard />
          <ParksCard />
          <ParksCard />
        </section>
      </div>
    </div>
  )
}

export default Home
