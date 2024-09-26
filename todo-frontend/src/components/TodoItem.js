import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/todo_delete/${todo._id}`);
      onDelete(todo._id); // Notify the parent component to update the list
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to={`/todo/${todo._id}`} className="text-decoration-none">{todo.task}</Link>
      <div>
        {todo.completed ? <span className="badge bg-success">Completed</span> : <span className="badge bg-warning text-dark">Pending</span>}
        <button className="btn btn-danger btn-sm ms-2" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
