import React, { Component } from "react";

class NewTodo extends Component {
  state = {
    text: ""
  };

  onChangeHandler(e) {
    this.setState({
      text: e.target.value
    });
  }
  submitHandler(event) {
    event.preventDefault();
    const textValue = this.state.text;

    const itemToAdd = { task: textValue, id: textValue };
    this.props.addItem(itemToAdd);

    // clear the input field
    this.setState({ text: "" });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={(event) => this.submitHandler(event)}>
          <label htmlFor="todo">Add New Todo: </label>
          <input
            id="todo"
            type="text"
            value={this.state.text}
            onChange={(e) => this.onChangeHandler(e)}
          />
          <button type="submit" onClick={(event) => this.submitHandler(event)}>
            Invia
          </button>
        </form>
      </div>
    );
  }
}

export default NewTodo;
