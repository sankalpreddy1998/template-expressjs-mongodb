
var express = require('express');
var app = express();

var bodyParser  = require('body-parser');
var mongoose = require('mongoose');
//aaaa
var mongoose = require('mongoose');

var my_model_name = require('/home/tv/Desktop/Projects/TODO/models/todo_data.js');

//============================================================================

var todo_controller = require('./controllers/todo controller.js');

//============================================================================

app.use(express.static('./public')); //tell server where to use the static-files

app.use(bodyParser.json()); //set body parser for req.body

//============================================================================
mongoose.connect('mongodb://localhost/my_db_name');  //connect with mongodb
mongoose.Promise = global.Promise;                   //promise ???????????
//============================================================================

todo_controller(app);

app.get('/data',function(req, res){

  my_model_name.find({}).then(function(my_collection_names){      //pural is taken
    var data = my_collection_names;
    //res.send({data:data});

    res.send({data:data});
  });
});

app.get('/datamob',function(req, res){

  my_model_name.find({}).then(function(my_collection_names){      //pural is taken
    var data = my_collection_names;
    //res.send({data:data});

    res.send(data);
  });
});
//============================================================================

app.listen(8080,function(){
  console.log('listening at port : 8080');
});

//============================================================================
