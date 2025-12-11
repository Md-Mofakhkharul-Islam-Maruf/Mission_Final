import React from 'react';
import { Link, NavLink } from 'react-router';
import './headers.css'

const Headers = () => {
    return (
        <div>
            <nav className='nav'> 
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>users</NavLink>
                <NavLink to='/users2'>user2</NavLink>
            </nav>
        </div>
    );
};

export default Headers;