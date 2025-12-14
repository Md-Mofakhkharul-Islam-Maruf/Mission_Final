import React, { useContext } from 'react';
import Special from './Special';
import { AssetContext } from './FamilyTree';

const Cousine = ({name}) => {
    const asset = useContext(AssetContext)
    return (
        <div>
            {name}
            <p>Asset: {asset}</p>
        </div>
    );
};

export default Cousine;