 var express = require('express');
 var logger = require('morgan');
 var bodyParser = require('body-parser');
 var cors = require('cors');

 var operationRouter = require('./routes/operationRouter');

 var app = express();

 app.use(logger('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(cors());

 app.use('/apps18/operation', operationRouter);

 app.use(function(req, res, next) {
     var err = new Error('Not Found');
     err.status = 404;
     next(err);
 });

 app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.json({ error: 'Service Not Found' });
 });

 module.exports = app;