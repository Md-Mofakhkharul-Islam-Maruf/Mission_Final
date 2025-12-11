import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const navigate = useNavigate()
    const details = useLoaderData()
    console.log(details)
    return (
        <div style={{ border: '2px solid blue', padding: '10px', borderRadius: '10px' }}>
            <p>{details.title}</p>
            <p>{details.body}</p>
            <button onClick={() => navigate(`/users2`)}>Go to Users2 page</button>
        </div>
    );
};

export default PostDetails;