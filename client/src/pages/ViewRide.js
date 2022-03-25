import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewRide = (props) => {
  let { id } = useParams
  console.log(id)
  const [rideDetails, setRideDetails] = useState('')

  useEffect(() => {
    const getRideDetails = async () => {
      const res = await axios.get(`http://localhost:3001/rides/${id}`)

      setRideDetails(res.data)
    }
    getRideDetails()
  }, [id])

  console.log(rideDetails)

  return (
    <div>
      <div className="img-wrapper">
        <img src={rideDetails.img} alt="404 err"></img>
        <h1>Name: {rideDetails.name}</h1>
        <p>Max Capacity: {rideDetails.maxCapacity}</p>
        <p>Ride Length: {rideDetails.rideLength}</p>
        <p>Description: {rideDetails.description}</p>
        <p>Park: {rideDetails.park}</p>
        <p>Year Built: {rideDetails.yearBuilt}</p>
      </div>
    </div>
  )
}

export default ViewRide
