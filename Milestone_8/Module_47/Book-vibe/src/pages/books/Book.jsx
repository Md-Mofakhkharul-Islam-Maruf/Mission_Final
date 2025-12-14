import React from 'react';
import { FaStarHalf } from "react-icons/fa";

const Book = ({ singleBook }) => {
    const {bookName, image, author, totalpages, rating, category, review} = singleBook
    return (
        <div className="card bg-base-100 shadow-sm border">
            <figure className='p-5 bg-gray-200'>
                <img 
                    className=' h-42'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{author}s</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}<FaStarHalf></FaStarHalf></div>
                </div>
            </div>
        </div>
    );
};

export default Book;