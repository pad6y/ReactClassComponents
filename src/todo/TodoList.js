import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  addTodo(todo) {
    // console.log(todo);
    this.setState({ todos: [...this.state.todos, todo] });
  }

  removeTodo(id) {
    const remainingTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: [...remainingTodos] });
  }

  updateTodo(id, updatedTodo) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTodo };
      }
      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  handleChecked(id) {
    // console.log('clicked');
    const checkTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    this.setState({ todos: checkTodo });
  }

  render() {
    return (
      <div className="todo-container">
        <h1>To Do List</h1>
        <AddTodoForm addTodo={this.addTodo} />
        <ul>
          {this.state.todos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              task={item.task}
              isCompleted={item.isCompleted}
              remove={this.removeTodo}
              update={this.updateTodo}
              checked={this.handleChecked}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
