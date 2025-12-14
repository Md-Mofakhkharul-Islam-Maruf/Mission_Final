import React, { createContext, useState } from 'react';
import Granpa from './Granpa';
import './FamilyTree.css'

export const AssetContext = createContext('')
export const MoneyContext = createContext(0)

const FamilyTree = () => {
    const asset = 'gold'
    const [money, setMoney] = useState(0)
    return (
        <div className='family-tree'>
            <h1>Family tree</h1>
            <p>Money: {money}</p>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={asset}>
                    <Granpa></Granpa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;