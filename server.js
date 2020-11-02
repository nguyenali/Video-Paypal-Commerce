//Loads the express module
const path = require('path');
const express = require('express');
// const routes = require('./controllers/');
const { read } = require('fs');

//Creates our express server
const app = express();
const port = 3000;

//Loads the handlebars module
const handlebars = require('express-handlebars');

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    //new configuration parameter
    extname: 'hbs'
    }));

//Serves static files (we need it to import a css file)
app.use(express.static('public'))
//Sets a basic route

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('homepage', {layout : 'main'});
    });

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));