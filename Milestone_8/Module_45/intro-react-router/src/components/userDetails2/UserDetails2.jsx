import React, { use } from 'react';

const UserDetails2 = ({userDetails2Promise}) => {
    const user = use(userDetails2Promise)
    const {name, username} = user
    
    return (
        <div>
            <p>name: {name}</p>            
            <p>name: {username}</p>            
        </div>
    );
};

export default UserDetails2;