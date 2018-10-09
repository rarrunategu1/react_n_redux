import React from 'react';

const AboutRose = ({about}) => { //destructuring is happening directly in the brackets
// const aboutList = about.map(about =>{
//     if(about.age > 20){
//               return (
//             <div className="about" key={about.id}>
//             <div>Name: {about.name}</div>
//             <div>Age: {about.age}</div>
//             <div>Planet: {about.planet}</div>
//             </div>
//                 );
//     } else {
//         return null;
//     }
//         });
     
       
        return(
            <div className="about-list">
            {
            about.map(about => {
            return about.age > 20 ? (
             <div className="about" key={about.id}>
              <div>Name: {about.name}</div>
              <div>Age: {about.age}</div>
              <div>Planet: {about.planet}</div>
             </div>
            ) : null;
        })
     }
                
            
            </div>
            );
    };


export default AboutRose;