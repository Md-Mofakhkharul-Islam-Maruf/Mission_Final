import React, { use } from 'react';
import Bottle from '../bottlE/Bottle';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    console.log(bottles.length)
    return (
        <div>
            {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;