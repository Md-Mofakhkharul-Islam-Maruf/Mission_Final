import React from 'react';
import heroImage from '../../assets/books.jpg'


const Banner = () => {
    return (
        <div className='flex justify-between items-center p-10 h-screen bg-base-300'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-semibold'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary'>View Book List</button>
            </div>
            <div className=''>
                <img className='w-full rounded-sm' src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;