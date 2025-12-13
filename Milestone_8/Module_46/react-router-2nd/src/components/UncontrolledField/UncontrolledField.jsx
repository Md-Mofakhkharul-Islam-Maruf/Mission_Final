import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('')
    const passRef = useRef('')

    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        console.log(email, password)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" placeholder='email' id="" required /><br />
                <input ref={passRef} type="password" name="email" id="" placeholder='password' required /><br />
                <input type="submit" name="email" id="" value='submit' />
            </form>
        </div>
    );
};

export default UncontrolledField;