const {
    response
} = require('express');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();


app.set('view engine', 'ejs'); // set view engine
app.use(expressLayouts); // set layout ejs
app.use(express.static('public')); // set folder public (img, css, js)



app.get('/', (req, res) => {
    res.render('index', {
        title: 'DigitalAgency',
        layout: 'layouts/main-layout'

    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port 3000! http://localhost:${port}`);
});