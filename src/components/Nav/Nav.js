import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <h1 className="nav-header">FoodEnvy</h1>
            <ul className="nav-links">
                <li>Log In</li>
                <li>Register</li>
            </ul>
        </nav>
    );
};

export default Nav;