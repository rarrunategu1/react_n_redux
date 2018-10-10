import React from 'react';

const AboutRose = ({about, deletePerson}) => { //destructuring is happening directly in the brackets
const aboutList = about.map(about =>{
    if(about.age > 20){
              return (
            <div className="about" key={about.id}>
            <div>Name: {about.name}</div>
            <div>Age: {about.age}</div>
            <div>Planet: {about.planet}</div>
            <button onClick={() => {deletePerson(about.id)}}>Delete person</button>
            </div>
                );
    } else {
        return null;
    }
        });
     
       
        return(
            <div className="about-list">
            {aboutList }
                
            
            </div>
            );
    };


export default AboutRose;