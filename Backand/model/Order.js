import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  purchaseDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
