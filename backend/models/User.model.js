const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    subscription: {
        ref: "Subscription",
        type: mongoose.SchemaTypes.ObjectId,
        default: null,
      },
})
const User = mongoose.model("User", userSchema)

module.exports = User