var mongoose = require('mongoose');  //import mongoose class and assign to variable
var Schema = mongoose.Schema;        //take sub class Schema and assign to variable

var my_schema_name = new Schema({    //define the schema
  task:
  {
      type: String
  }
});

var my_model_name = mongoose.model('my_collection_name',my_schema_name);  //create the model(fuse: collection name , schema)

module.exports = my_model_name; //export the model
