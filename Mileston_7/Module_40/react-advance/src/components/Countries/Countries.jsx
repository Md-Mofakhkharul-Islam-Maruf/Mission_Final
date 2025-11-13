import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)
    console.log(countries)
    return (
        <div>
            <h1>Traveling Countries: {countries.length || 'Pawa jay nai'}</h1>
            {
                countries.map(country => <Country key={country.name.common}  country={country}></Country>)
            }
        </div>
    );
};

export default Countries;