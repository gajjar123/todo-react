import React, { Component } from 'react';
import './App.css';
import AddTodo from "../src/components/AddTodo/AddTodo";
import ListTodos from "../src/components/ListTodos/ListTodos";

class App extends Component {
  state ={
    todos: []
  }

  addNewTodo = (text) =>{
    let newTodo = {
      text: text,
      checked: false
    };

    this.setState({todos: [...this.state.todos, newTodo]});
  }

  deleteTodo = (text) => {
    let newTodos = this.state.todos.filter(todo => todo.text !== text);
    this.setState({
      todos: newTodos
    })
  }

  render(){
    return (
      <div>
        <AddTodo 
          onAddButtonClick={(param) => this.addNewTodo(param)} />
        <ListTodos 
          todos={this.state.todos} 
          onDelete={(param) => this.deleteTodo(param)} />
      </div>
    );
  }
}

export default App;
