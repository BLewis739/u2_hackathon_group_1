import React from 'react'
import ParksCard from '../components/Parkscard'
import RideCard from '../components/Ridecard'
import Search from '../components/Search'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const API_KEY = 'cfdd70687f62478bb0de89b755a57503'

  const [parks, setParks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getParks = async () => {
      const res = await axios.get(`http://localhost:3001/parks`)
      setParks(res.data)
      console.log(res)
    }
    getParks()
  }, [])

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  console.log(parks)

  return (
    <div>
      <div className="search">
        <h2> Search Result</h2>
        <Search
          onChange={handleChange}
          value={searchQuery}
          // onSubmit={getSearchResult}
        />
      </div>
      <div className="trending">
        {parks.slice(0, 3).map((park, index) => (
          <Link to={`/park/details/${park.id}`} key={park._id}>
            <ParksCard image={park.background_image} {...park} />
          </Link>
        ))}
      </div>
      <div className="categories">
        <h2>Park Categories</h2>
        <section>
          {parks.slice(0, 3).map((park) => (
            <Link to={`/park/details/${park.id}`} key={park._id}>
              <ParksCard image={park.background_image} {...park} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
