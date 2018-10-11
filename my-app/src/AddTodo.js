//we need a state to store what the user types in the input field so it will be a container component
import React, { Component } from 'react'

class addTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Add new todo:</label>
            <input type="text" onChange={this.handleChange} />
            </form>
            </div>
            )
    }
}

export default addTodo;