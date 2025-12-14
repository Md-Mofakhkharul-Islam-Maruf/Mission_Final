import React, { createContext } from 'react';
import Granpa from './Granpa';
import './FamilyTree.css'

export const AssetContext = createContext('')

const FamilyTree = () => {
    const asset = 'gold'
    return (
        <div className='family-tree'>
            <h1>Family tree</h1>
            <AssetContext.Provider value={asset}>
                <Granpa></Granpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;