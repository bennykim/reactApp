import React, { Component } from 'react';
import '../css/todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todoList: []
    };
  }

  componentDidMount() {
    this.refs.input.focus();
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') return this.addTodo();
  };

  addTodo = () => {
    if (this.state.todo === '') return;
    this.setState({
      todo: '',
      todoList: [
        ...this.state.todoList, this.state.todo
      ]
    });
  };

  deleteTodo = (idx) => {
    this.setState({
      todoList: this.state.todoList.filter((todo, i) => i !== idx)
    });
  };

  render() {
    return (
      <div className="todo">
        <h2>Todo</h2>

        { this.state.todoList.length > 0 ?
          <ul className="todo-list">
            {this.state.todoList.map((todo, idx) => {
              return (
                <li 
                  className="todo-txt" 
                  key={idx}
                >
                  {todo}
                  <button 
                    type="button" 
                    name="button" 
                    onClick={this.deleteTodo.bind(this, idx)}
                  >
                    -
                  </button>
                </li>
              );
            })}
          </ul>
          :
          <ul></ul>
        }

        {this.state.todoList.length < 5 ?
          <div className="add-todo">
            <input
              ref="input"
              type="text"
              name="inputTodo"
              value={this.state.todo}
              maxLength="15"
              placeholder="What needs to be done?"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
            <button 
              type="button" 
              name="button" 
              onClick={this.addTodo}
            >
              +
            </button>
          </div>
          :
          <p className="msg">
            The list is full.
          </p>
        }
      </div>
    );
  }
}

export default Todo;
