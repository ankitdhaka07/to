import React from 'react';
// const React = require('react');

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoDetails from './components/TodoDetails';
import AddTodo from './components/AddTodo';
import './styles/global.css'; // Import global styles
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
