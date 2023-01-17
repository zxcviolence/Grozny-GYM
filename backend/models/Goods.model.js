const mongoose = require('mongoose');

const goodsSchema = mongoose.Schema({
    name: String,
    image: String,
    price: String,
    subtitle: String
})

const Goods = mongoose.model("Goods", goodsSchema)

module.exports = Goods