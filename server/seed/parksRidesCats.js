const db = require('../db')
//const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const park1 = await new Park({
    name: 'Apple',
    
  })
  brand1.save()

