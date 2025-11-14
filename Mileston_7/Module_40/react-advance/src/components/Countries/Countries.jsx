import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)
    // console.log(countries)

    const [visitedCountry, setVisitedCountry] = useState([])

    const handlevisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
        console.log(country)
    }
    return (
        <div>
            <h1>Traveling Countries: {countries.length || 'Pawa jay nai'}</h1>
            <h3>Travelled country:
                <ol>
                    {
                        visitedCountry.map(visited => <li>{visited.name.common}</li>)
                    }
                </ol>
            </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.name.common}
                        country={country}
                        handlevisitedCountry={handlevisitedCountry}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;