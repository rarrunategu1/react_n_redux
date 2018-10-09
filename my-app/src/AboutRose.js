import React, { Component } from 'react';

class AboutRose extends Component{
    render(){
        const {about} = this.props; //this is destructuring which stores each one in a variable called name, age and planet and now the code below is reusable
        const aboutList = about.map(about =>{
            return (
            <div className="about" key={about.id}>
            <div>Name: {about.name}</div>
            <div>Age: {about.age}</div>
            <div>Planet: {about.planet}</div>
            </div>
                );
        });
        
        return(
            <div className="about-list">
            {aboutList}
            </div>
            );
    }
}

export default AboutRose;