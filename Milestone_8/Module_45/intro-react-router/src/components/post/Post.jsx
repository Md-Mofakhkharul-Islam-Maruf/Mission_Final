import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post
    return (
        <div style={{ border: '3px solid red', borderRadius: '10px', margin: '30px ', padding: '5px ' }}>
            <h2>{title}</h2>
            <Link to={`${id}`}><button style={{backgroundColor: 'aqua'}}>Show details</button></Link>
        </div>
    );
};

export default Post;