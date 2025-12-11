import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const navigate = useNavigate()
    const details = useLoaderData()
    console.log(details)
    const {userId} = useParams()
    console.log(userId)
    return (
        <div style={{ border: '2px solid blue', padding: '10px', borderRadius: '10px' }}>
            <p>{details.title}</p>
            <p>{details.body}</p>
            <p>userId: useParams {userId}</p>
            <button onClick={() => navigate(`/users2`)}>Go to Users2 page</button>

        </div>
    );
};

export default PostDetails;