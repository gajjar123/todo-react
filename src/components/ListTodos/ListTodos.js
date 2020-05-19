import React from 'react';
import classes from "./ListTodos.module.css";
import ShowTodo from "../ShowTodo/ShowTodo";

const ListTodos = (props) => {
    
    let handleDeleteTodo = (todoText) => {
        props.onDelete(todoText);
    }
    
    return (<div className={classes.ListTodos}>
        {
            props.todos.map((todo,index) => (
                 <ShowTodo 
                    text={todo.text} 
                    key={index} 
                    checked={todo.checked} 
                    onDelete={() => handleDeleteTodo(todo.text)} />
            ))
        }
    </div>)
};

export default ListTodos;