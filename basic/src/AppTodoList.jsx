import React, {useState, useEffect} from 'react'

export default function AppTodoList() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (evnet) => {
        evnet.preventDefault();
        if (todo === '') return;
        setTodos((prev) => [...prev, todo]);
        setTodo('');
    };

    return (
        <div>
            <h1>My Todos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={todo}
                    type="text"
                    placeholder='Write your to do...'
                />
                <button>Add Todo</button>
            </form>
            <hr />
            <ul>
                {todos.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    );
}