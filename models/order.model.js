const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require('./product.model');
const User = require('./user.model');

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: Product,
        required: true
    }],
    orderTotal: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
},
{ versionKey: false }
)

module.exports = Order = mongoose.model("orders", orderSchema);