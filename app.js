const express = require('express');
const data = require('./data.json');
//Optional path module for setting the absolute path in the express.static function
const path = require('path');
const app = express();

const { projects } = require('./data.json');

//*******************/
//Set Middleware    /
//******************/

//view engine setup
app.set('view engine', 'pug');

//use a static route and the express.static method to serve static files 
app.use('/static', express.static('public'));

//set routes
app.get('/', (req, res) => {
    res.render('index', data.projects);
});

app.get('/about', (req, res) => {
    res.render('about');
});

//Work in progress - dynamic routes for each project in data.json.

app.get('projects/:id', (req, res) => {
    // const projectID = req.params.id;
    // const project = projects.find( ({id}) => id === +projectID)
    res.render('project', {

    });
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
    console.log(projects[0]);
});