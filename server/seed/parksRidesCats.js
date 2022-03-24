const db = require('../db')
const { Park, Ride, Category } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const park1 = await new Park({
    name: 'Seven Flags',
    description: 'Thrill rides in the mile high city!',
    location: 'Denver, CO',
    rides: [{ ObjectId }],
    yearOpened: 1984,
    category: 'Amusement'
  })
  park1.save()

  const park2 = await new Park({
    name: 'Tree Gardens',
    description: 'Texas fun in the sun!',
    location: 'Houston, TX',
    rides: [{ ObjectId }],
    yearOpened: 1992,
    category: 'Kids'
  })
  park2.save()

  const park3 = await new Park({
    name: 'Galaxy Studios',
    description: 'Out of this world fun!',
    location: 'Orlando, FL',
    rides: [{ ObjectId }],
    yearOpened: 1965,
    category: 'Water'
  })
  park3.save()

  const park4 = await new Park({
    name: 'Coconut Farm',
    description: "It's LA, it's nice, and it's safe!",
    location: 'Los Angeles, CA',
    rides: [{ ObjectId }],
    yearOpened: 1987,
    category: 'Water'
  })
  park4.save()

  const park5 = await new Park({
    name: 'Moose and Friends',
    description: 'All the exhilaration and company of Moose and friends!',
    location: 'San Diego, CA',
    rides: [{ ObjectId }],
    yearOpened: 1976,
    category: 'Kids'
  })
  park5.save()

  const park6 = await new Park({
    name: 'Oak Point',
    description: 'The best coasters in all the land!',
    location: 'Gary, IN',
    rides: [{ ObjectId }],
    yearOpened: 1999,
    category: 'Amusement'
  })
  park6.save()
}
