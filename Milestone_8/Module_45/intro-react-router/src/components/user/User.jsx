import { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../userDetails2/UserDetails2';

const User = ({ user }) => {

    const [showInfo, setShowInfo] = useState(false)
    const { id, name, email, phone } = user

    const userDetails2Promise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())

    const userStyle = {
        margin: '10px',
        padding: '10px',
        border: '2px solid red',
        borderRadius: '4px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <h3>Email: {email}</h3>
            <h3>Contact: {phone}</h3>
            <Link to={`${id}`}>View details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide Details' : 'Show Details'}</button>

            {
                showInfo && <Suspense fallback={<span>Loading............</span>}>
                    <UserDetails2 userDetails2Promise={userDetails2Promise}></UserDetails2>
                </Suspense>
            }

        </div>
    );
};

export default User;