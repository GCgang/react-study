import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const handleAdd = (todo) => setTodos([...todos, todo]); // setTodos(prev => [...prev, todo])
    return (
        <section>
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>{todo.text}</li>)
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}