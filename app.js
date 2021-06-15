const express = require('express');
const { projects } = require('./data.json');
//Optional path module for setting the absolute path in the express.static function
const path = require('path');
const app = express();

//const { projects } = data;

//*******************/
//Set Middleware    /
//******************/

//view engine setup
app.set('view engine', 'pug');

//use a static route and the express.static method to serve static files 
app.use('/static', express.static('public'));

//set routes
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about');
});

//Work in progress - dynamic routes for each project in data.json.

app.get('/project/:id', (req, res) => {
    res.render('project', { 
        title: projects[req.params.id].project_name,
        description: projects[req.params.id].description,
        technologies: projects[req.params.id].technologies,
        live_demo: projects[req.params.id].live_link,
        github_link: projects[req.params.id].github_link,
        image_urls: projects[req.params.id].image_urls
    });
});

//added error handlers
app.use((req, res, next) => {
    const err = new Error('The page you\'re looking for can\'t be found');
    err.status = 404;
    next(err);
});
  
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.use((err, req, res, next) => {
    res.status(500);
    res.render('error');
    res.send("Oops, something went wrong.")
 });


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
    console.log(projects[0].project_name);
});