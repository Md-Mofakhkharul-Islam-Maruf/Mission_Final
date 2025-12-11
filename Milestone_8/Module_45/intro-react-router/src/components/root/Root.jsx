import React from 'react';
import Headers from '../headers/Headers';
import { Outlet, useNavigation } from 'react-router';
import Footers from '../footer/Footers';
import Sidebar from '../sidebar/Sidebar';
import './root.css'


const Root = () => {
    const navigation = useNavigation()
    const isNavitating = Boolean(navigation.location)

    return (
        <div>
            <Headers></Headers>
            <div className='main-root'>
                <Sidebar></Sidebar>
                {isNavitating && <span>Loading.......</span>}
                <Outlet></Outlet>
            </div>
            <Footers></Footers>
        </div>
    );
};

export default Root;