import React from 'react'

const Contact = () => {
    //redirects contact page to about page in 2 seconds
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000); 
    return (
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>Hello, lets try out that React Router today.  It'll be awesome!</p>
        </div>
        );
};

export default Contact;