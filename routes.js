const express=require('express');
const router=express.Router();
const TodoController=require('./controller');


router.get('/todos',TodoController.getAllTodos);
router.get('/todos/:id',TodoController.getTodoById);
router.post('/addTodo',TodoController.addTodo);
router.put('/todo_done/:id',TodoController.todo_done);
router.put('/todo_update/:id',TodoController.todo_update);
router.delete('/todo_delete/:id',TodoController.todo_delete);

module.exports=router;

