const mongoose = require('mongoose');

// model for subscribe
const Subscribe = mongoose.model('Subscribe', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = Subscribe;