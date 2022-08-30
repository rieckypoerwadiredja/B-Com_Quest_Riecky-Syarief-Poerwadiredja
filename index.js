const {
    response
} = require('express');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();


app.set('view engine', 'ejs'); // set view engine
app.use(expressLayouts); // set layout ejs
app.use(express.static('public')); // set folder public (img, css, js)

app.use(express.urlencoded({
    extended: true
})); // set method post

// mongodb database
require('./utils/db'); // connect to mongodb
const Subscribe = require('./model/subscribe'); // model subscribe

// subcribe function
const {
    postSubscribe
} = require('./utils/subscribe');
// data form
const formSubscribeLayouts = require('./utils/data')


app.get('/', (req, res) => {
    // question and data form

    res.render('index', {
        title: 'DigitalAgency',
        layout: 'layouts/main-layout',
        // data form from -> data.js
        formSubscribeLayouts
    });
});

app.post('/', async (req, res) => {
    // function for post -> subscribe.js
    await postSubscribe(Subscribe, req.body.name, req.body.email)
    res.redirect('/');
});

app.post('/portofolio/:name', async (req, res) => {
    // function for post -> subscribe.js
    await postSubscribe(Subscribe, req.body.name, req.body.email)
    res.redirect('/');
});

app.get('/portofolio/:name', (req, res) => {
    // question and data form

    res.render('portfolio', {
        title: req.params.name,
        layout: 'layouts/detail-layout',
        name: req.params.name,
        // data form from -> data.js
        formSubscribeLayouts
    });
})


const port = 3000;
app.listen(port || process.env.PORT, () => {
    console.log(`Example app listening on port 3000! http://localhost:${port}`);
});