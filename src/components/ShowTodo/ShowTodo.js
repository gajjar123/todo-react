import React, { useState } from 'react';
import classes from './ShowTodo.module.css';

const ShowTodo = (props) => {
    
    const [checkboxChecked, setCheckboxChecked] = useState(props.checked);

    let handleCheckChange = (checkedState) => {
        setCheckboxChecked(checkedState);
    }

    let handleDelete = () => {
        props.onDelete(props.text);
    }

    return (<div className={classes.ShowTodo}>
        <input type="checkbox" 
            className={classes.checkbox} 
            checked={checkboxChecked} 
            onChange={(e) => handleCheckChange(e.target.checked)}></input>

        <span 
            className={checkboxChecked ? [classes.text, classes.completed].join(' ') : classes.text}>
            {props.text}
        </span>

        <button 
            className={classes.link} 
            onClick={handleDelete}>
            Delete
        </button>
    </div>)
};

export default ShowTodo;