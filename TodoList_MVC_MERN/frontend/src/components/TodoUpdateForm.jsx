import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TodoForm.css';

const TodoUpdateForm = ({ currentTodo, updateTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentTodo) {
            setTitle(currentTodo.title);
            setDescription(currentTodo.description);
        }
    }, [currentTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            updateTodo(id, title, description);
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Edit task title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Edit task description"
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default TodoUpdateForm;
