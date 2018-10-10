import React, { Component } from 'react';
import AboutRose from './AboutRose';
import AddPerson from './AddPerson';

class App extends Component {
  state = {
    about : [
      {name: 'Rose', age: 45, planet: 'Mars', id: 1},
      {name: 'Jane', age: 56, planet: 'Jupiter', id: 2},
      {name: 'Joe', age: 19, planet: 'Saturn', id: 3}
      ]
  }
  addPerson = (person) => {
     person.id = Math.random(); //giving the person an id
     let newArray = [...this.state.about, person]; //stores the currently array with the new person
     this.setState({  //sets the state of the array to the new array 
       about: newArray
     });
  }
  deletePerson = (id) => {
    let people = this.state.about.filter(person => {
      return person.id !== id; //if this returns true the new person will remain in the new array
    });
    this.setState({
      about: people
    });
    
  }
  render() {
    return (
      <div className="App">
        <h1>My React app!</h1>
        <p>Welcome</p>
        <AboutRose deletePerson={this.deletePerson} about={this.state.about}/>
        <AddPerson addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
