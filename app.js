const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');
const characterRouter = require('./routes/characters');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/characters', characterRouter);

try {
	mongoose.connect(
		"mongodb+srv://matt1155:o3uxiVTetn2XLTWC@character-sheet.deiie.gcp.mongodb.net/character-sheet?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true  }
  ).then( (res) => console.log(res))
  
} catch (error) {
	handleError(error);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
