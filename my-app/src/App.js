import React, { Component } from 'react';
import AboutRose from './AboutRose';


class App extends Component {
  state = {
    about: [
      {name: 'Rose', age: 45, planet: 'Mars', id: 1},
      {name: 'Jane', age: 56, planet: 'Jupiter', id: 2},
      {name: 'Joe', age: 25, planet: 'Saturn', id: 3}
      ]
  }
  render() {
    return (
      <div className="App">
        <h1>My React app!</h1>
        <p>Welcome</p>
        <AboutRose about={this.state.about}/>
      </div>
    );
  }
}

export default App;
