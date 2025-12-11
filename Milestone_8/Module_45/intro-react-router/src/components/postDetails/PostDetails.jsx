import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div style={{ border: '2px solid blue', padding: '10px', borderRadius: '10px' }}>
            <p>{details.title}</p>
            <p>{details.body}</p>
        </div>
    );
};

export default PostDetails;