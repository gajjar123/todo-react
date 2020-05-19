import React, { useState } from 'react';
import classes from "./AddTodo.module.css";

const AddTodo = (props) => {
    const [todoText, setTodoText] = useState("");

    let handleClick = () => {
        if(todoText){
            props.onAddButtonClick(todoText);
            setTodoText("");
        }
    }

    return (<div className={classes.AddTodo}>
        <input 
            type="text" 
            className={classes.textBox} 
            value={todoText} 
            onChange={(e) => setTodoText(e.target.value)}>    
        </input>

        <button 
            className={classes.Button} 
            onClick={handleClick}>
            Add Todo
        </button>
    </div>)
};

export default AddTodo;