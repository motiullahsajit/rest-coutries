import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    let { countryName } = useParams();
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [countryName])
    const { flag, population, name, capital, nativeName, timezones } = country;
    return (
        <div className='container'>
            <div className="card mb-3">
                <img src={flag} className="card-img-top h-10" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Capital: {capital}</p>
                    <p className="card-text">population: {population}</p>
                    <p className="card-text">Native Name: {nativeName}</p>
                    <p className="card-text"><small className="text-muted">TIme Zone: {timezones}</small></p>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;