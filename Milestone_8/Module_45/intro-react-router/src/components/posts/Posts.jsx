import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../post/Post';

const Posts = () => {
    const postData = useLoaderData()
    return (
        <div>
            {
                postData.map(post => <Post key={post.id} post={post}></Post>)
            }
            <p>{postData.length}</p>
        </div>
    );
};

export default Posts;