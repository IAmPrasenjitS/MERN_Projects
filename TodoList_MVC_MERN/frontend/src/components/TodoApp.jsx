import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoUpdateForm from './TodoUpdateForm';
import './TodoApp.css';
import axios from 'axios'

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState(null);
    const [apiFlag, setApiFlag] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/api/todos/read').then((res) => {
            setTodos(res.data)
        }).catch((err) => {
            console.log("Something went wrong...")
        })
    }, [apiFlag]);

    const addTodo = (title, description) => {
        const newTodo = {
            "title": title,
            "description": description,
            "completed": false
        }
        axios.post('http://127.0.0.1:3000/api/todos/create', newTodo).then(() => {
            setApiFlag(!apiFlag)
        })
    };

    const updateTodo = (id, updatedTitle, updatedDescription) => {
        const updatedData = {
            "_id": id,
            "title": updatedTitle,
            "description": updatedDescription,
            "completed": false
        }
        axios.put('http://127.0.0.1:3000/api/todos/update',updatedData).then(() => {
            setApiFlag(!apiFlag)
        })
    };

    const deleteTodo = (id) => {
        axios.post('http://127.0.0.1:3000/api/todos/delete',{"_id":id}).then(() => {
            setApiFlag(!apiFlag)
        })
    };

    const toggleComplete = (id, completed) => {
        const updatedData = {
            "_id": id,
            "completed": !completed
        }
        axios.put('http://127.0.0.1:3000/api/todos/update',updatedData).then(() => {
            setApiFlag(!apiFlag)
        })
    };

    return (
        <Router>
            <div className="todo-app">
                <h1>Todo List</h1>
                <Routes>
                    <Route path="/" element={<TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} setCurrentTodo={setCurrentTodo} />} />
                    <Route path="/add" element={<TodoForm addTodo={addTodo} />} />
                    <Route path="/edit/:id" element={<TodoUpdateForm currentTodo={currentTodo} updateTodo={updateTodo} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default TodoApp;
