const Todo=require('./model');

exports.getAllTodos = async(req,res) => {
    try {
        
        const todos=await Todo.find();
        if(!todos||todos.length==0)
        return res.status(404).json({message : "todos not found"});    
        
        res.json(todos);
    } catch (error) {
        res.status(500).json({message :error.message });
    }
};

exports.getTodoById = async(req,res) =>{
    try {
        const todo= await Todo.findById(req.params.id);
        
        if(!todo)
        return res.status(404).json({message:"todo not found"});    
        res.json(todo);

    } catch (error) {
        res.status(500).json({message :error.message});
    }
};

exports.addTodo = async (req,res)=>{
    try {
        const todo= await new Todo({
            task: req.body.task,
            completed:req.body.completed
        });
        if(!todo)
        return res.status(404).json({message:"todo not found"});    
        
        const saved_todo= await todo.save();

        res.status(201).json(saved_todo);
   
    } catch (error) {
        res.status(500).json({message:error.message});
    }

};

exports.todo_done =async (req,res) =>{
    try {
        const todo= await Todo.findById(req.params.id);
        if(!todo)
        return res.status(404).json({message:"todo not found"});
        
        todo.completed=true;
        
        const updated_todo= await todo.save();

        res.status(200).json(updated_todo);
        
    } catch (error) {
        res.status(500).json({message:error.message});        
    }

}

exports.todo_update = async (req,res)=>{

    try {
        const todo=await Todo.findByIdAndUpdate(
            req.params.id,{
                task: req.body.task,
                completed: req.body.completed                
            }
        );
        if(!todo)
            return res.status(404).json({message:"Todo not found"});

        
        const updated_todo= await todo.save();
        res.status(200).json(updated_todo);

    } catch (error) {
        res.status(500).json({message: error.message});
    }

};


exports.todo_delete = async (req,res)=>{
    try {
        const todo= await Todo.findByIdAndDelete(req.params.id);
        
        if(!todo)
        return res.status(404).json({message:"Todo not found"});

        res.status(200).json(todo);
    
    } catch (error) {
        res.status(500).json({message:error.message});    
    }

};


