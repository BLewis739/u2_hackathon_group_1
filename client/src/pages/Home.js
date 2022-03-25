import React from 'react'
import ParksCard from '../components/Parkscard'
import RideCard from '../components/Ridecard'
import Search from '../components/Search'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [parks, setParks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const getParks = async () => {
      const res = await axios.get(`http://localhost:3001/parks`)
      setParks(res.data)
      console.log(res)
    }
    getParks()
  }, [])

  const getSearchResult = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:3001/parks/${searchQuery}`)
    setSearchResult(res.data)
    setSearchQuery('')
    setSearched(true)
    console.log(res.data)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          onChange={handleChange}
          value={searchQuery}
          onSubmit={getSearchResult}
        />
      </div>
      <div className="content">
        {!searched && <h1>Trending Park</h1>}
        {searched && <h1>Search Result</h1>}
        <div className="trending">
          {!searched &&
            parks.slice(0, 3).map((park, index) => (
              <Link
                className="viewPage"
                to={`/parks/${park._id}`}
                key={park._id}
              >
                <ParksCard image={park.img} {...park} />
              </Link>
            ))}
          {searched && (
            <Link to={`/park/${searchResult._id}`}>
              <ParksCard {...searchResult} />
            </Link>
          )}
        </div>
      </div>
      {/* <div className="categories">
        <h2>Park Categories</h2>
        <section>
          {parks.slice(0, 3).map((park) => (
            <Link to={`/park/details/${park.id}`} key={park._id}>
              <ParksCard image={park.background_image} {...park} />
            </Link>
          ))}
        </section>
      </div> */}
    </div>
  )
}

export default Home
