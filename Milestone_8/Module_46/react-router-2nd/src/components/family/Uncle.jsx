import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousine name='1 no cousine'></Cousine>
                <Cousine name='kijani'></Cousine>
            </section>
        </div>
    );
};

export default Uncle;