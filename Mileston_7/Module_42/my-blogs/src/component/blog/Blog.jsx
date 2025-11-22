import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={blog.cover}
                    alt="blog image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>{blog.title}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Mark as Read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;