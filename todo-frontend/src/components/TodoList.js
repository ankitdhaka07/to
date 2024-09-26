import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Todo List</h1>
      <Link to="/add-todo" className="btn btn-primary mb-3">Add Todo</Link>
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
