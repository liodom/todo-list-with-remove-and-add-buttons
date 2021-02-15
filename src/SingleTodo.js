import React, { Component } from "react";
import "./single-todo.css";
import "./removeButton.css";

class SingleTodo extends Component {
  render() {
    const { todoTask, removeItem } = this.props;
    return (
      <div className="single-todo">
        <span>{todoTask}</span>
        <button onClick={removeItem} className="remove-button">
          Remove
        </button>
      </div>
    );
  }
}

export default SingleTodo;
