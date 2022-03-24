const db = require('../db')
const { Park, Ride, Category } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ride1 = await new Ride({
    name: 'Widow Maker',
    description: 'You might die, jk',
    maxCapacity: 2,
    yearBuilt: 1988,
    rideLength: 5,
    park: 'Seven Flags'
  })
  ride1.save()

  const ride2 = await new Ride({
    name: 'Tea Party',
    description: 'A lovely, gentle tea time.',
    maxCapacity: 8,
    yearBuilt: 1995,
    rideLength: 15,
    park: 'Tree Gardens'
  })
  ride2.save()

  const ride3 = await new Ride({
    name: 'Wave Cave',
    description: 'Waterery fun in a dark cave!',
    maxCapacity: 100,
    yearBuilt: 1972,
    rideLength: 15,
    park: 'Galaxy Studios'
  })
  ride3.save()

  const ride4 = await new Ride({
    name: 'Cocunut Waters',
    description: 'Relax in the lazy waters!',
    maxCapacity: 25,
    yearBuilt: 1990,
    rideLength: 30,
    park: 'Coconut Farm'
  })
  ride4.save()

  const ride5 = await new Ride({
    name: 'Moosey-go-Round',
    description:
      'A local take on the classic Merry go Round! Our riders enjoy a spin on moose instead of traditional horses.',
    maxCapacity: 110,
    yearBuilt: 1978,
    rideLength: 300,
    park: 'Moose and Friends'
  })
  ride5.save()

  const ride6 = await new Ride({
    name: 'Twist and Scream',
    description:
      'The fastest coaster in the midwest! High velocity twists and turns that will leave your jaw dropped and lungs empty!',
    maxCapacity: 60,
    yearBuilt: 2013,
    rideLength: 220,
    park: 'Oak Point'
  })
  ride6.save()

  const ride7 = await new Ride({
    name: 'Supernova Splash',
    description: '200 foot drop into shallow wave pool!',
    maxCapacity: 1,
    yearBuilt: 2008,
    rideLength: 3,
    park: 'Galaxy Studios'
  })
  ride7.save()

  const park1 = await new Park({
    name: 'Seven Flags',
    description: 'Thrill rides in the mile high city!',
    location: 'Denver, CO',
    rides: ride1._id,
    yearOpened: 1984,
    category: 'Amusement'
  })
  park1.save()

  const park2 = await new Park({
    name: 'Tree Gardens',
    description: 'Texas fun in the sun!',
    location: 'Houston, TX',
    rides: ride2._id,
    yearOpened: 1992,
    category: 'Kids'
  })
  park2.save()

  const park3 = await new Park({
    name: 'Galaxy Studios',
    description: 'Out of this world fun!',
    location: 'Orlando, FL',
    rides: [ride3._id, ride7._id],
    yearOpened: 1965,
    category: 'Water'
  })
  park3.save()

  const park4 = await new Park({
    name: 'Coconut Farm',
    description: "It's LA, it's nice, and it's safe!",
    location: 'Los Angeles, CA',
    rides: ride4._id,
    yearOpened: 1987,
    category: 'Water'
  })
  park4.save()

  const park5 = await new Park({
    name: 'Moose and Friends',
    description: 'All the exhilaration and company of Moose and friends!',
    location: 'San Diego, CA',
    rides: ride5._id,
    yearOpened: 1976,
    category: 'Kids'
  })
  park5.save()

  const park6 = await new Park({
    name: 'Oak Point',
    description: 'The best coasters in all the land!',
    location: 'Gary, IN',
    rides: ride6._id,
    yearOpened: 1999,
    category: 'Amusement'
  })
  park6.save()

  const category1 = await new Category({
    name: 'Amusement',
    parks: [park1._id, park6._id]
  })
  category1.save()

  const category2 = await new Category({
    name: 'Water',
    parks: [park3._id, park4._id]
  })
  category2.save()

  const category3 = await new Category({
    name: 'Kids',
    parks: [park2._id, park5._id]
  })
  category3.save()

  console.log('Created Rides, Parks, and Categories/Themes!')
}

const run = async () => {
  await main()
  db.close()
}

run()
