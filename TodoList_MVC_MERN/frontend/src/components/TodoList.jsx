import React from 'react';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, toggleComplete, deleteTodo, setCurrentTodo }) => {
    return (
        <div>
            <Link to="/add" className="add-todo-link">Add Todo</Link>
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>Completed</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo._id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                            setCurrentTodo={setCurrentTodo}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
