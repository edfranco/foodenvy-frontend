import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ logout, currentUser }) => {
    return (
        <nav>
            <Link to="/">
                <h1 className="nav-header">FoodEnvy</h1>
            </Link>
            <ul className="nav-links">
                {currentUser
                    ? <>
                        <Link to="/register">
                            <li>Profile</li>
                        </Link>
                        <li style={{ cursor: 'pointer' }} onClick={logout}>Logout</li>
                    </>
                    : <>
                        <Link to="/login">
                            <li>Log In</li>
                        </Link>
                        <Link to="/">
                            <li>Register</li>
                        </Link>
                    </>
                }
            </ul>
        </nav>
    );
};

export default Nav;