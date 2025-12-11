import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const userData = useLoaderData()
    console.log(userData)
    return (
        <div>
            <h3>This is users</h3>
        </div>
    );
};

export default Users;