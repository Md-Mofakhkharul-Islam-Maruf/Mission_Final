import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setAllbooks] = useState([])
    
    useEffect(() => {
        fetch('booksData.json').then(res => res.json()).then(res => setAllbooks(res))
    }, [])
    return (
        <div>
            <p>{allBooks.length}</p>
        </div>
    );
};

export default Books;