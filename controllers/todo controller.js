var mongoose = require('mongoose');

var my_model_name = require('/home/tv/Desktop/Projects/TODO/models/todo_data.js');

//==============================================================================

module.exports = function(app){


  app.get('/',function(req, res){
    res.sendFile('/home/tv/Desktop/Projects/TODO/home.html');

  });

  app.post('/',function(req, res){
    console.log('got a post request : saving data');

    var rec = new my_model_name(req.body);   //create record
    rec.save();                              //save record

    console.log(req.body);

    res.send('hello');
  });

  app.delete('/:id',function(req, res){
    console.log('got a delete request for id:');
    console.log(req.params.id);
    my_model_name.findByIdAndRemove(req.params.id,function(){         //function:  findByIdAndRemove(id,function)
      console.log('event deleted');
    });
    res.send('hello');
  });

  app.put('/:id',function(req, res){
    console.log('got an update request for id:');
    console.log(req.params.id);
    var x = req.body.task;
    my_model_name.findByIdAndUpdate(req.params.id,{ task: x},function(){    //function:  findByIdAndUpdate(id,what_to_update,function)
      console.log('event updated');
    });
    res.send('hello');
  });

};
