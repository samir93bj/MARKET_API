import mongoose, { Schema } from 'mongoose'

const CartSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
},
{
  toJSON: {
    transform (doc, ret) {
      delete ret.__v
      delete ret.updatedAt
    }
  }
},
{
  timestamps: true
})

const Cart = mongoose.model('cart', CartSchema)

export default Cart
