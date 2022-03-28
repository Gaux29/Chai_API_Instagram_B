const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./user.model');

const productSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [{
        rating: Number,
        user: {
            type: Schema.Types.ObjectId,
            ref: User
        },
        text: String,
        _id: false
    }]
},
    { versionKey: false }
);

module.exports = mongoose.model('products', productSchema);