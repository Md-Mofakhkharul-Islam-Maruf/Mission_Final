import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({ handleBookmarked, handleReadingTime }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(blogs)


    return (
        <div>
            <h1 className=' text-3xl'>Total blogs: {blogs.length}</h1>
            <div className='grid grid-cols-2'>
                {
                    blogs.map(blog => <Blog handleBookmarked={handleBookmarked} handleReadingTime={handleReadingTime} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;