import React, { useState, useEffect } from "react";
import FormTodo from "./FormTodo.js";
import TosdoList from "./TodoList.js";
import './TodoHooks.css'

const Header = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="header">
                    <h1>Todo-List Hook</h1>
                    <div>
                        <FormTodo
                            input={input}
                            setInput={setInput}
                            setTodos={setTodos}
                            todos={todos}
                            editTodo={editTodo}
                            setEditTodo={setEditTodo}
                        />
                    </div>
                    <div>
                        <TosdoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
