import React, { Component } from 'react';

import './TodoItem.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChecked() {
    this.props.checked(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="">
          <form onSubmit={this.handleUpdate} className="form">
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
              autoFocus
              className="input"
            />
            <button className="todo-btn">Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="item-container">
          <li
            style={{
              textDecorationLine: `${
                this.props.isCompleted ? 'line-through' : 'none'
              }`,
            }}
            onClick={this.handleChecked}
          >
            {this.props.task}
          </li>
          <button className="todo-btn" onClick={this.toggleForm}>
            Edit
          </button>
          <button className="todo-btn" onClick={this.handleRemove}>
            X
          </button>
        </div>
      );
    }
    return result;
  }
}

export default TodoItem;
