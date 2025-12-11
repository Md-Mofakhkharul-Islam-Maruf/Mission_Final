import React from 'react';
import { Link, NavLink } from 'react-router';
import './headers.css'

const Headers = () => {
    return (
        <div>
            <nav className='nav'> 
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobile</NavLink>
                <NavLink to='/laptops'>Laptop</NavLink>
            </nav>
        </div>
    );
};

export default Headers;