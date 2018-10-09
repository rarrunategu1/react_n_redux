import React, { Component } from 'react';

class AboutRose extends Component{
    render(){
        //console.log(this.props);
        const {name, age, planet} = this.props; //this is destructuring which stores each one in a variable called name, age and planet and now the code below is reusable
        return(
            <div className="about">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Planet: {planet}</div>
            </div>
            );
    }
}

export default AboutRose;