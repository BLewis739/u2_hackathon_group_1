const { model } = require('mongoose')
const ParkSchema = require('./Park')
const CategorySchema = require('./Category')
const RideSchema = require('./Ride')

const Park = model('park', ParkSchema)
const Category = model('categories', CategorySchema)
const Ride = model('rides', RideSchema)

module.exports = {
  Park,
  Category,
  Ride
}
