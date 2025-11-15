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


    const [visitedFlags, setVisitedFlags] = useState([])

    const handlevisitedFlags = (flag) => {
        console.log('Flag is added', flag)
        const newVisitedFlag = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlag)
        console.log(visitedFlags)
    }


    return (
        <div>
            <h1>Traveling Countries: {countries.length || 'Pawa jay nai'}</h1>
            <h3>Travelled country:
                <ol>
                    {
                        visitedCountry.map((visited, index) => <li key={index}>{visited.name.common}</li>)
                    }
                </ol>
            </h3>
            <div className='visited-flag-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.name.common}
                        country={country}
                        handlevisitedCountry={handlevisitedCountry}
                        handlevisitedFlags={handlevisitedFlags}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;