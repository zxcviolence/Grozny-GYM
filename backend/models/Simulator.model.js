const mongoose = require('mongoose');

const simulatorSchema = mongoose.Schema({
    image: String,
    title: String,
})
const Simulator = mongoose.model('Simulator', simulatorSchema)

module.exports = Simulator
