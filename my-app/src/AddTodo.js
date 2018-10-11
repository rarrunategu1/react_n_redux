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
        this.props.addTodo(this.state);
        this.setState({
            content: '' //this emptys the addtodo field after you hit submit
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Add new todo:</label>
            <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
            </div>
            )
    }
}

export default addTodo;