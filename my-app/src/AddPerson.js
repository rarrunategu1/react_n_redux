import React, { Component } from 'react'

class AddPerson extends Component {
    state = {
        name: null,
        age: null,
        planet: null
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addPerson(this.state); //this passes the user input from the child via the prop method up to the parameter person in the root component 
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
             <label htmlFor="name">Name:</label>
             <input type="text" id="name" onChange={this.handleChange} />
             <label htmlFor="name">Age:</label>
             <input type="text" id="age" onChange={this.handleChange} />
             <label htmlFor="name">Planet:</label>
             <input type="text" id="planet" onChange={this.handleChange} />
             <button>Submit</button>
            </form>
            </div>
            
            )
    }
}
export default AddPerson;