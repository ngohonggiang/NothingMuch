const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 5500;

//HTTP loggers
app.use(morgan('combined'));


//Template engines
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/../views'));
console.log(__dirname+'hello');
app.get('/', function (req, res, next) {
    res.render('index');
});
app.get('/video', function (req, res, next) {
    res.render('video');
});
app.get('/music', function (req, res, next) {
    res.render('song');
  
});
app.listen(5500);