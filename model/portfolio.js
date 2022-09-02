const mongoose = require('mongoose');

const Portfolio = mongoose.model('Portfolio', {
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

module.exports = Portfolio