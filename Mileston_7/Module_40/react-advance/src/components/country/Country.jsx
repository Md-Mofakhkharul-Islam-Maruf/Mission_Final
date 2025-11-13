import React from 'react';

const Country = ({country}) => {
    
    console.log(country)
    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            <img src={country?.flags?.png} alt="" />
            <h3>Populations: {country?.population}</h3>
            <h3>Region: {country?.region}</h3>
        </div>
    );
};

export default Country;