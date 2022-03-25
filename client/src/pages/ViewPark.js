import React from 'react'
import ParksCard from '../components/Parkscard'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import RideCard from '../components/Ridecard'

const ViewPark = (props) => {
  let { id } = useParams()
  const [parkDetail, setParkDetails] = useState({})
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getParkDetails = async () => {
      const res = await axios.get(`http://localhost:3001/parks/${id}`)

      setParkDetails(res.data)
    }
    getParkDetails()
  }, [id])

  useEffect(() => {
    const getRide = async () => {
      const res = await axios.get(`http://localhost:3001/rides`)
      setRides(res.data)
    }
    getRide()
  }, [parkDetail])

  const parkRides = rides.filter((ride) => {
    if (ride.park === parkDetail.name) {
      return ride
    }
  })

  console.log(parkRides)

  console.log(rides)
  console.log(parkDetail)
  // console.log(parkDetail.rides)

  return (
    <div park-content>
      <div className="parkImage">
        <img src={parkDetail.img} alt="image"></img>
      </div>
      <div className="discription">
        <h1>{parkDetail.name}</h1>
        <h3>Type: {parkDetail.category}</h3>
        <p>{parkDetail.description}</p>
        <p>Park Opened: {parkDetail.yearOpened}</p>
      </div>
      <div className="parkRides">
        <h1>Rides:</h1>
        {parkRides.map((ride) => (
          <Link to={`/rides/${ride._id}`} key={ride._id}>
            <RideCard img={ride.img} {...ride} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ViewPark
