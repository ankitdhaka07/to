import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/todos/${id}`)
      .then(response => {
        setTodo(response.data);
        setTask(response.data.task);
        setCompleted(response.data.completed);
      })
      .catch(error => console.error('Error fetching todo:', error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/todo_update/${id}`, { task, completed });
      navigate('/');
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Edit Todo</h1>
      <form onSubmit={handleUpdate}>
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
        <button type="submit" className="btn btn-primary">Update Todo</button>
      </form>
      <Link to="/" className="btn btn-secondary mt-3">Back to Todo List</Link>
    </div>
  );
};

export default TodoDetails;
