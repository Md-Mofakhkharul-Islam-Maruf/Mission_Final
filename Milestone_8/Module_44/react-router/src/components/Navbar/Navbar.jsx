import React, { useState } from 'react';
import Navlink from './Navlink';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [open, setOpen] = useState(true)
    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Contact", path: "/contact" }
    ];

    return (
        <nav className='flex justify-between mx-4'>


            <ul className='md:hidden'>
                {
                    navItems.map(item => <li><a href={item.path}>{item.name}</a></li>)
                }
            </ul>
            {/* menu and cross button logic */}
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <Menu className='md:hidden' /> : <X className='md:hidden' />
                }
                <h3 className='hidden md:flex'>My Navbar</h3>
            </span>


            <ul className='hidden md:flex gap-8'>
                {
                    navItems.map(item => <li><a href={item.path}>{item.name}</a></li>)
                }
            </ul>
            <h3>Sign In</h3>





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