import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {
    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Contact", path: "/contact" }
    ];

    return (
        <nav>
            <Navlink navItems={navItems}></Navlink>

            {/* Dynamic way to add navlink */}
            {/* <ul className='flex'>
                {navItems.map(item =>
                    <li className='mx-5'>
                        <a href={item.path}>{item.name}</a>
                    </li>)}
            </ul> */}

            {/* conventional static way to create a navbar */}
            {/* <ul className='flex justify-center'>
                <li className='mx-5'>Home</li>
                <li className='mx-5'>About</li>
                <li className='mx-5'>Contact</li>
                <li className='mx-5'>Game</li>
            </ul> */}
        </nav>
    );
};

export default Navbar;