import React, { Component } from 'react';
import './assets/css/App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Title 01',
        completed: true
      },
      {
        id: 2,
        title: 'Title 02',
        completed: true
      },
      {
        id: 3,
        title: 'Title 03',
        completed: false
      }
    ]
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello React!</h1>
        <ul>
          <Todos todos={this.state.todos}/>
        </ul>
      </div>
    );
  }
}

export default App;