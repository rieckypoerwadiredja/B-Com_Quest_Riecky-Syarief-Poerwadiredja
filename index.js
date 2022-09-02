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
const Portfolio = require('./model/portfolio') // model service

// subcribe function
const {
    postSubscribe
} = require('./utils/subscribe');
// data form
const formSubscribeLayouts = require('./utils/data')


app.get('/', async (req, res) => {
    // Service (portfolio) data from DB
    const portfolio = await Portfolio.find()
    // question and data form

    res.render('index', {
        title: 'DigitalAgency',
        layout: 'layouts/main-layout',
        // data form from -> data.js
        formSubscribeLayouts,
        portfolio
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

app.get('/portofolio/:name', async (req, res) => {
    const portfolio = await Portfolio.find()
    const name = encodeURIComponent(req.params.name)
    const selectPortfolio = await Portfolio.findOne({
        title: req.params.name.replace('%20', ' ')
    })
    // question and data form
    res.render('portfolio', {
        title: req.params.name,
        layout: 'layouts/detail-layout',
        name: req.params.name,
        // data form from -> data.js
        formSubscribeLayouts,
        // all service
        portfolio,
        // select service
        selectPortfolio
    });
})


const port = 3000;
app.listen(port || process.env.PORT, () => {
    console.log(`Example app listening on port 3000! http://localhost:${port}`);
});