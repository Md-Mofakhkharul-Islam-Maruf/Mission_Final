import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, email, phone } = user

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
        </div>
    );
};

export default User;