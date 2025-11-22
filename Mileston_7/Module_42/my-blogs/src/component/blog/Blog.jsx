import React from 'react';
import { IoBookmarksSharp } from 'react-icons/io5';

const Blog = ({ blog, handleBookmarked }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm m-10">
            <figure>
                <img
                    src={blog.cover}
                    alt="blog image" />
            </figure>
            <div className="card-body">
                <div className='flex justify-around items-center'>
                    <img className='w-12' src={blog.author_img} alt="" />
                    <h3 className='text-2xl font-semibold'>{blog.author}</h3>
                    <button onClick={()=>handleBookmarked(blog)}>
                        <IoBookmarksSharp size={25} />
                    </button>
                </div>
                <p className='text-lg font-semibold'>{blog.title}</p>
                <div className='flex text-2xl'>
                    {
                        blog.hashtags.map(hash => <p>{hash}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Mark as Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;