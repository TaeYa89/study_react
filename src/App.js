import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
    const [toDo, setTodo] = useState('');
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === '') {
            return;
        }
        setTodo('');
        console.log(toDo);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type='text'
                    placeholder='Write your to do...'></input>
                <button>Add To Do</button>
            </form>
        </div>
    );
}

export default App;
