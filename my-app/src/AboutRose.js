import React from 'react';

const AboutRose = ({about}) => { //destructuring is happening directly in the brackets
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
    };


export default AboutRose;