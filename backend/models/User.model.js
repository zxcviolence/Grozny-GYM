const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: {
        type: String,
      
    },
    password: {
        type: String,
       
    },
    subscription: {
        ref: "Subscription",
        type: mongoose.SchemaTypes.ObjectId,
        default: null,
      },
    role: [{
        type: String,
        default: "Пользователь",
    }],
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    patronymic: {
        type: String,
    },
    banned: {
        type: Boolean,
        default: false,
    },
})
const User = mongoose.model("User", userSchema)

module.exports = User