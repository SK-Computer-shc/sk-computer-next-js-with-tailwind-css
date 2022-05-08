const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    products : [{
        productId: {type: String},
        quantity: {type: String, default: 1}
    }],
    address: {type: String, required: True},
    amount:{type: Number, require:True},
    order: {type: String, default:'pending', required:True},
  },
  {timestamps:True});

  mongoose.models= {}
  export default mongoose.model("Order",OrderSchema);