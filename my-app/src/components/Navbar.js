import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    // setTimeout(() => {
    //     props.history.push('/about'); //this is to use with higher order component withRouter
    // }, 2000);
    
    return (
        <nav className = "nav-wrapper red darken-3">
            <div className ="container">
            <a href = " " className="brand-logo">React Routing</a>
            <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
            </div>
        </nav>
        );
};

export default withRouter(Navbar);