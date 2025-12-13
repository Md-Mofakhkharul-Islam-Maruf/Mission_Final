import React from 'react';

const SimpleForm = () => {
    const handleForm = (e) => {
        console.log('form Submitted')
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        console.log(name, email)
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <br />
                <input type="email" name="email" placeholder='Your Email' id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;