import React from 'react';
import Dad from './Dad';
import Aunt from './Aunt';
import Uncle from './Uncle';

const Granpa = () => {
    return (
        <div>
            <h3>Grand pa</h3>
            <section className='flex'>
                <Dad></Dad>
                <Aunt></Aunt>
                <Uncle></Uncle>
            </section>
        </div>
    );
};

export default Granpa;