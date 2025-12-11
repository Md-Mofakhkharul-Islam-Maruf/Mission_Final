import React from 'react';
import Headers from '../headers/Headers';
import { Outlet } from 'react-router';
import Footers from '../footer/Footers';
import Sidebar from '../sidebar/Sidebar';
import './root.css'

const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <div className='main-root'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footers></Footers>
        </div>
    );
};

export default Root;