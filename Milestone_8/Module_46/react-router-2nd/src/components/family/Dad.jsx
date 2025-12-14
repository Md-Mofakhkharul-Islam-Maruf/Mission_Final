import React from 'react';
import Myself from './Myself';
import Broter from './Broter';

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <Myself></Myself>
                <Broter></Broter>
            </section>
        </div>
    );
};

export default Dad;