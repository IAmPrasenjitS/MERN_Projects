import React from 'react';
import { Link } from 'react-router-dom';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, deleteTodo, setCurrentTodo }) => {
    const handleEdit = () => {
        setCurrentTodo(todo);
    };

    return (
        <tr className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <td>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo._id, todo.completed)}
                />
            </td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
                <Link to={`/edit/${todo._id}`} onClick={handleEdit}>Edit</Link>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TodoItem;
