import React from 'react';

const Book = ({ singleBook }) => {
    const {bookName, image, author, totalpages, rating, category, review} = singleBook
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img 
                    className='w-2xl h-80'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{author}s</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;