import React from 'react';
import UseInputField from '../../hooks/UseInputField';

const HookForm = () => {
    const [name, nameOnchange] = UseInputField('')

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnchange} type="text" name="name" id="" placeholder='Enter your name'/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;