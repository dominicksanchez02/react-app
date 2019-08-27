import React, { Component } from 'react';

class TodoItem extends Component {

  getStyle = () => {
    return {
      listStyle: 'none',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  handleOnChange = (e) => {
    console.log(this.props)
  }

  render() {
    return (
      <li style={this.getStyle()}>
        <input type="checkbox" onChange={this.handleOnChange}/>
        {this.props.todo.title}
      </li>
    )
  }

}

export default TodoItem;