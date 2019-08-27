import React, { Component } from 'react';
import '../assets/css/Todos.css';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
      console.log('todos from props', this.props);
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
    ))
  }
}

export default Todos;