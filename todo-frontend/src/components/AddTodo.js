import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/addTodo', { task, completed });
      navigate('/');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Task</label>
          <input
            id="task"
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="completed" className="form-check-label">Completed</label>
          <input
            id="completed"
            type="checkbox"
            className="form-check-input"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
