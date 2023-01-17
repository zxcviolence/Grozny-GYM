const mongoose = require('mongoose');

const simulatorSchema = mongoose.Schema({
    image: String,
    muscles: String,
    title: String,
    subtitle: String,
})
const Simulator = mongoose.model('Simulator', simulatorSchema)

module.exports = Simulator
