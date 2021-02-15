import React, { Component } from "react";
import SingleTodo from "./SingleTodo";

class TodoList extends Component {
  render() {
    const { todoItems, removeItem } = this.props;
    return (
      <div>
        {todoItems.map((item) => (
          <div key={item.id}>
            <SingleTodo
              todoTask={item.task}
              removeItem={() => removeItem(item.id)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
