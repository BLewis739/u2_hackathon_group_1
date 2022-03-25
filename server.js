const express = require('express')
//const routes = require('./server/routes')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const db = require('./server/db')
const { Ride } = require('./server/models')
const { Park } = require('./server/models')
const { Category } = require('./server/models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('I am root!')
})

app.get('/rides', async (req, res) => {
  const rides = await Ride.find()
  res.json(rides)
})

app.get('/parks', async (req, res) => {
  const parks = await Park.find()
  res.json(parks)
})

app.get('/categories', async (req, res) => {
  const categories = await Category.find()
  res.json(categories)
})

// Get a specific ride, park, or category by Id

app.get('/rides/:id', async (req, res) => {
  try {
    const { id } = req.params
    const ride = await Ride.findById(id)
    if (!ride) throw Error('Ride not found')
    res.json(ride)
  } catch (e) {
    console.log(e)
    res.send('Ride not found!')
  }
})

app.get('/parks/:id', async (req, res) => {
  try {
    const { id } = req.params
    const park = await Park.findById(id)
    if (!park) throw Error('Park not found')
    res.json(park)
  } catch (e) {
    console.log(e)
    res.send('Park not found!')
  }
})

app.get('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params
    const category = await Category.findById(id)
    if (!category) throw Error('Category not found')
    res.json(category)
  } catch (e) {
    console.log(e)
    res.send('Category not found!')
  }
})

// Post a new ride or park

app.post('/parks', async (req, res) => {
  try {
    const park = await new Park(req.body)
    await park.save()
    return res.status(201).json({
      park
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.post('/rides', async (req, res) => {
  try {
    const ride = await new Ride(req.body)
    await ride.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
