const express = require('express');
const { projects } = require('./data.json');
//Optional path module for setting the absolute path in the express.static function
const path = require('path');
const app = express();

var createError = require('http-errors');


//*******************/
//Set Middleware    /
//******************/

//view engine setup
app.set('view engine', 'pug');

//Static route and the express.static method to serve static files 
app.use('/static', express.static('public'));

//set routes - home or index route
app.get('/', (req, res) => {
    res.render('index', { projects });
});

//about route
app.get('/about', (req, res) => {
    res.render('about');
});

//dynamic project routes for each project in data.json.

app.get('/project/:id', (req, res, next) => {
    const id = req.params.id;
    
    if (projects[id] === undefined) {
        console.log('The page you\'re looking for can\'t be found')
        next();
    } else if (projects) {
    res.render('project', { 
        title: projects[id].project_name,
        description: projects[id].description,
        technologies: projects[id].technologies,
        live_demo: projects[id].live_link,
        github_link: projects[id].github_link,
        image_urls: projects[id].image_urls
    });
    
    } 
});

//Error handlers

//404 handler
app.use((req, res, next) => {
    const err = new Error('The page you\'re looking for can\'t be found');
    err.status = 404;
    console.log('404 error handler called');
    next(err);
});

//renders the 'page-not-found' view
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('page-not-found');
});

//Catch-all error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.status(500);
    res.render('error');
    res.send("Oops, something went wrong.")
    console.log('There was an error - check out the stack trace for more info.')
 });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});