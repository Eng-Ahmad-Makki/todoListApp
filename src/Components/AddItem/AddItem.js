import React, { Component } from "react";

class AddItem extends Component {
  state = {
    task: "",
    sort: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      task: "",
      sort: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter task..."
            id="task"
            onChange={this.changeHandler}
            value={this.state.task}
            required
          ></input>
          <input
            type="number"
            placeholder="Enter sort..."
            min="1"
            max="999"
            id="sort"
            onChange={this.changeHandler}
            value={this.state.sort}
            required
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default AddItem;
