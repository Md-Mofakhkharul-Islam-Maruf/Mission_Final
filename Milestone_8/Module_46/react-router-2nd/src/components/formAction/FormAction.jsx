import React from 'react';

const FormAction = () => {
    const handleFormAction = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <form onSubmit={handleFormAction}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <br />
                <input type="email" name="email" placeholder='Your Email' id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;