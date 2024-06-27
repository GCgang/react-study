import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ToDoList from './components/TodoList/TodoList';

export default function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <ToDoList filter={filter} />
    </div>
  );
}
