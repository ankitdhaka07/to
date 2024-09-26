const { boolean } = require('joi');
const mongoose=require('mongoose');


const taskSchema = new mongoose.Schema({
task: { type: String, required: true },
completed: { type: Boolean,required:true }
});
// Todo_col-Todo Collection in our database 
const Todo_col= mongoose.model('Todo',taskSchema);
module.exports= Todo_col;
