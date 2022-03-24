const { Schema } = require('mongoose')

const Category = new Schema(
  {
    name: { type: String, required: true },
    parks: [{ type: Schema.Types.ObjectId, ref: 'parks' }]
  },
  { timestamps: true }
)

module.exports = Category
