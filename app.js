const express = require('express');
const { projects } = require('./data.json');
//Optional path module for setting the absolute path in the express.static function
const path = require('path');
const app = express();



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

app.get('/project/:id', (req, res) => {
    const id = req.params.id;
    
    res.render('project', { 
        title: projects[id].project_name,
        description: projects[id].description,
        technologies: projects[id].technologies,
        live_demo: projects[id].live_link,
        github_link: projects[id].github_link,
        image_urls: projects[id].image_urls
    });
});

//Error handlers
app.use((req, res, next) => {
    const err = new Error('The page you\'re looking for can\'t be found');
    err.status = 404;
    next(err);
});
  
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('page-not-found');
});

app.use((err, req, res, next) => {
    res.status(500);
    res.render('error');
    res.send("Oops, something went wrong.")
 });


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});