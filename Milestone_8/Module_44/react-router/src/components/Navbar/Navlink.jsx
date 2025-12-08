import React from 'react';

const Navlink = ({ navItems }) => {
    return (
        <ul className='flex'>
            {
                navItems.map(item => <li className='mx-5'>
                    <a href={item.path}>{item.name}</a>
                </li>)
            }
        </ul>
    );
};

export default Navlink;