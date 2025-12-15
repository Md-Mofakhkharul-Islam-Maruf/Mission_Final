import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utilities/utilities'; import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams()
    const BookID = parseInt(id)
    const data = useLoaderData()

    const singleBook = data.find(book => book.bookId === BookID)
    const { bookId, bookName, image } = singleBook || {}

    const handleMarkAsRead = (bookId) => {
        // Swal.fire({
        //     title: "Drag me!",
        //     icon: "success",
        //     draggable: true
        // });
        toast("Wow so easy!")
        addToStoreDB(bookId)
    }
    return (
        <div>
            <img className='w-40' src={image} alt="" />
            <h2 className=''>{bookName}</h2>
            <ToastContainer />
            <div className='flex gap-5'>
                <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-primary'>Mark as Read</button>
                <button className='btn btn-secondary'>Wish List</button>
            </div>
        </div>
    );
};

export default BookDetails;