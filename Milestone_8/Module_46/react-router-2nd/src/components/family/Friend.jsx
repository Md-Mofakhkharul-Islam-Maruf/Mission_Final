import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <button onClick={()=>setMoney(money+ 1000)}>Add Money</button>            
        </div>
    );
};

export default Friend;