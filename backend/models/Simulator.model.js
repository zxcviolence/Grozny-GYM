const mongoose = require('mongoose');

const simulatorSchema = mongoose.Schema({
    image: String,
    muscles: String,
    title: String,
    subtitle: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
})
const Simulator = mongoose.model('Simulator', simulatorSchema)

module.exports = Simulator
