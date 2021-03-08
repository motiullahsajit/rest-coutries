import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://restcountries.eu/rest/v2/all'
            const res = fetch(url)
            const data = (await res).json();
            return data;
        }
        fetchData().then(data => setCountries(data))
    }, [])
    return (
        <>
            <div className="row g-4">
                {
                    countries.map(country => <Country key={country.alpha3Code} country={country}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;