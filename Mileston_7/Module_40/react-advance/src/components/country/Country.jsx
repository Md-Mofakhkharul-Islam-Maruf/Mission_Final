import React from 'react';
import './country.css'

const Country = ({country}) => {
    
    console.log(country)
    const handleVisited = ()=>{
        console.log('visited')
    }
    return (
        <div className='country'>
            <h3>Name: {country.name.common}</h3>
            <img src={country?.flags?.png} alt="" />
            <h3>Populations: {country?.population}</h3>
            <h3>Region: {country?.region}</h3>
            <button onClick={handleVisited}>Visited</button>
        </div>
    );
};

export default Country;