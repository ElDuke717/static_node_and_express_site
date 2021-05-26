const express = require('express');
const data = require('./data.json');

const app = express();

//view engine setup
app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});