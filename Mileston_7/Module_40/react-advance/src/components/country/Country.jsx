import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handlevisitedCountry }) => {

    const [visited, setVisited] = useState(false)

    // console.log(country)
    const handleVisited = () => {
        setVisited(!visited)
        handlevisitedCountry(country)
    }
    return (
        <div className={`country ${visited && 'contry-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country?.flags?.png} alt="" />
            <h3>Populations: {country?.population}</h3>
            <h3>Region: {country?.region}</h3>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;