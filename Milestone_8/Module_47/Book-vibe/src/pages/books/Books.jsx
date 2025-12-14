import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

    const [allBooks, setAllbooks] = useState([])

    useEffect(() => {
        fetch('booksData.json').then(res => res.json()).then(res => setAllbooks(res))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center'>All Books are here.........</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allBooks.map(singleBook => <Book singleBook={singleBook} key={singleBook.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;