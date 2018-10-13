import React from 'react';
import Color from '../hoc/Color';

const About = () => {
    return (
        <div className="container">
        <h4 className="center">About</h4>
        <p>Hello, lets try out that React Router today.  It'll be awesome!</p>
        </div>
        );
};

export default Color(About);