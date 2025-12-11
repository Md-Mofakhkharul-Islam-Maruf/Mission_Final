import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../user/User';

const Users = () => {
    const userData = useLoaderData()
    return (
        <div>
            <h3>This is users</h3>
            {
                userData.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;