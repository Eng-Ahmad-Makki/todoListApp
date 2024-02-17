import React, { Component } from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem/TodoItem";
import AddItem from "./Components/AddItem/AddItem";

class App extends Component {
  state = {
    items: [],
  };

  deleteHandler = (id) => {
    /*  طريقة الحذف من المصفوفة let deleteItems = this.state.items;             
    let item = deleteItems.findIndex(item => item.id === id);
    deleteItems.splice(item, 1);
    this.setState({deleteItems}); */
    let deleteItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: deleteItems });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="mainApp">
        <h1 className="header">Todo List APP</h1>
        <TodoItem items={this.state.items} deleteHandler={this.deleteHandler} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
