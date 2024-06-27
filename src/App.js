import './App.css';
import Header from './components/Header/Header';
import ToDoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

export default function App() {
  return (
    <div>
      <Header />
      <ToDoList />
      <AddTodo />
    </div>
  );
}
