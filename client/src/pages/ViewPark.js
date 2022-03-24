import React from 'react'
import ParksCard from '../components/Parkscard'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewPark = (props) => {
  const { parkId } = useParams()
  const API_KEY = 'cfdd70687f62478bb0de89b755a57503'

  const [parkDetail, setParkDetails] = useState({})

  useEffect(() => {
    let isCancelled = false
    const getParkDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/parks/623ccb99cb40ad9c3eadc8be`
      )
      if (!isCancelled) {
        setParkDetails(response.data)
      }
    }
    getParkDetails()

    return () => {
      isCancelled = true
    }
  }, [parkId])

  console.log(parkDetail)

  return (
    <div park-content>
      <div className="parkImage">
        <img src={parkDetail.img} alt="image"></img>
      </div>
      <div>
        <h1>{parkDetail.name}</h1>
      </div>
      <div className="discription">
        <p>{parkDetail.description_raw}</p>
      </div>
    </div>
  )
}

export default ViewPark
