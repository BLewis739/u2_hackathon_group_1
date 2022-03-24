const { Schema } = require('mongoose')

const Ride = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    maxCapacity: { type: Number, required: true },
    yearBuilt: { type: Number, required: true },
    rideLength: { type: Number, required: true },
    park: [{ type: Schema.Types.ObjectId, ref: 'parks' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('rides', Ride)
