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


app.get('/', (req, res) => {
    // question and data form
    formSubscribeLayouts = {
        title: 'Subscribe Form',
        desc: 'Fill in required customs info',
        action: '/',
        method: 'POST',
        questions: [

            {
                label: 'Company Name',
                idClassName: 'name',
                type: 'text',
                placeholder: 'PT.Example',
            },
            {
                label: 'Company Email',
                idClassName: 'email',
                type: 'email',
                placeholder: 'example@gmail.com',
            }
        ]
    };

    res.render('index', {
        title: 'DigitalAgency',
        layout: 'layouts/main-layout',
        formSubscribeLayouts
    });
});

app.post('/', async (req, res) => {
    const subscribeFormData = new Subscribe({ // create new subscribe
        name: req.body.name,
        email: req.body.email
    });

    await subscribeFormData.save().then(() => {
        console.log('subscribe data berhasil di simpan');
        console.log(subscribeFormData);
    }).catch((err) => {
        console.log(err);
    });
    res.redirect('/');
})


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port 3000! http://localhost:${port}`);
});