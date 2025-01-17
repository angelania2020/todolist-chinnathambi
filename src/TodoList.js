import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
            this._inputElement.focus();
        }
        // console.log(itemArray);
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return item.key !== key;
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form action="" onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} type="text" placeholder="Enter a task" />
                        <button type="submit">OK</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;