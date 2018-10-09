import React, { Component } from 'react';
import AboutRose from './AboutRose';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React app!</h1>
        <p>Welcome</p>
        <AboutRose name="Rose" age="45" planet="mars" />
        <AboutRose name="Jane" age="72" planet="venus" />
      
      </div>
    );
  }
}

export default App;
