import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handlePasswordChanged= (e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" name="email" id="" required /><br />
                <input type="password" name="email" onChange={handlePasswordChanged} defaultValue={password} id="" required /><br />
                <input type="submit" name="email" id="" value='submit' />
            </form>
        </div>
    );
};

export default ControlledField;