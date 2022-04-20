import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './AddTodoForm.css';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: ' ' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addTodo({ ...this.state, id: uuidv4(), isCompleted: false });
    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
          className="input"
          autoFocus
        />
        <button className="todo-btn">Add Todo</button>
      </form>
    );
  }
}

export default AddTodoForm;
