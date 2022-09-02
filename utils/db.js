// mongoose
const mongoose = require('mongoose');

const dotenv = require("dotenv");
dotenv.config();

// 'mongodb://127.0.0.1:27017/DigitalAgency'
// process.env.DBLINK
mongoose.connect(process.env.DBLINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => console.log('database connect'))
    .catch((err) => console.log('database failed to connect' + err))