var express = require('express');
var filmRouter = express.Router();

//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

//index
filmRouter.get('/films', function(req,res){
  res.json(films);
});

//show
filmRouter.get('/films/:id',function(req,res){
  res.json({data: films[req.params.id]});
});

//create
filmRouter.post('/films',function(req,res){
  films.push(req.body.film);
  res.json({data: films});
});

//update
filmRouter.put('/films/:id', function(req, res){
  films[req.params.id] = req.body.films;
  res.json({data: films})
});

//delete
filmRouter.delete('/films/:id', function(req, res){
  films.splice(req.params.id,1);
  res.json({data: films});
});

module.exports = filmRouter;