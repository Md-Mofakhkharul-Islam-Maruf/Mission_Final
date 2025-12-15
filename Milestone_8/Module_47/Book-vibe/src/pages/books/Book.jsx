import React from 'react';
import { BsListNested } from 'react-icons/bs';
import { FaStarHalf } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const { bookName, image, author, totalpages, rating, bookId, category, review, tags, yearOfPublishing, publisher } = singleBook
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm border">
                <figure className='p-5 bg-gray-200'>
                    <img
                        className=' h-42'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center'>
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by : {publisher}</p>
                    <div className="card-actions justify-end border-t-2 border-dashed ">
                        <div className="badge badge-outline mt-2">{category}</div>
                        <div className="badge badge-outline mt-2">{rating}<FaStarHalf></FaStarHalf></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;