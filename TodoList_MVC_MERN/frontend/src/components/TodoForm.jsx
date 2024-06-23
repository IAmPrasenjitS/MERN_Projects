import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodo(title, description);
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a new task description"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
