import React from 'react';

const Country = ({country}) => {
    
    console.log(country)
    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            <h3>Flags: {country.population}</h3>
        </div>
    );
};

export default Country;