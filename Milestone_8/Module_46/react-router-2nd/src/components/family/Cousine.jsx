import React, { useContext } from 'react';
import Special from './Special';
import { AssetContext } from './FamilyTree';
import Friend from './Friend';

const Cousine = ({ name }) => {
    const asset = useContext(AssetContext)
    return (
        <div>
            {name}
            <p>Asset: {asset}</p>
            {name === 'kijani' && <Friend></Friend>}
        </div>
    );
};

export default Cousine;