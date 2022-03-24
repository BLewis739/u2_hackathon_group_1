const { Schema } = require('mongoose')

const Park = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    rides: { type: Array, required: true },
    location: { type: String, required: true },
    yearOpened: { type: Number, required: true },
    category: [{ type: Schema.Types.ObjectId, ref: 'categories' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('parks', Park)
