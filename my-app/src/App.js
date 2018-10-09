import React, { Component } from 'react';
import AboutRose from './AboutRose';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React app!</h1>
        <p>Welcome</p>
        <AboutRose />
      </div>
    );
  }
}

export default App;
