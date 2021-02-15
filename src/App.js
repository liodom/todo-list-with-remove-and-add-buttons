import React, { Component } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";

// const data = {
//   todos: [
//     { task: "clean the kitchen", id: 1 },
//     { task: "Play the piano", id: 2 },
//     { task: "Receive my award", id: 3 },
//     { task: "Drive the car outside", id: 4 },
//     { task: "Have a bath with salts", id: 5 },
//     { task: "Call my Dad", id: 6 },
//     { task: "Read some book on architecture", id: 7 }
//   ]
// };

export default class App extends Component {
  state = {
    todos: [
      { task: "clean the kitchen", id: 1 },
      { task: "Play the piano", id: 2 },
      { task: "Receive my award", id: 3 },
      { task: "Drive the car outside", id: 4 },
      { task: "Have a bath with salts", id: 5 },
      { task: "Call my Dad", id: 6 },
      { task: "Read some book on architecture", id: 7 }
    ]
  };

  removeItem = (idToRemove) => {
    const items = [...this.state.todos];
    const newItems = items.filter((item) => item.id !== idToRemove);
    this.setState({ todos: newItems });
  };
  addItem = (itemToAdd) => {
    this.setState({ todos: [itemToAdd, ...this.state.todos] });
  };

  render() {
    return (
      <div className="App">
        <NewTodo addItem={this.addItem} />
        <TodoList todoItems={this.state.todos} removeItem={this.removeItem} />
      </div>
    );
  }
}
