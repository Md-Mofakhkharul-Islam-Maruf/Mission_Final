import React, { use } from 'react';

const Users2 = ({users2dataPromise}) => {
    const user2Data = use(users2dataPromise)
    console.log(user2Data)
    return (
        <div>
            <h3>This is users 2</h3>
        </div>
    );
};

export default Users2;