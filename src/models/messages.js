const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
    author:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Message', messageSchema);