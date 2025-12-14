import React from 'react';
import Cousine from './Cousine';

const Aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousine name='1 no cousine'></Cousine>
                <Cousine name='2 no cousine'></Cousine>
            </section>
        </div>
    );
};

export default Aunt;