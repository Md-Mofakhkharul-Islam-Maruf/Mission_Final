import React, { use } from 'react';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    console.log(bottles.length)
    return (
        <div>
            
        </div>
    );
};

export default Bottles;