import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { flag, name, population } = props.country
    let history = useHistory();
    function handleClick() {
        history.push(`/country/${name}`);
    }
    return (
        <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="card h-100">
                <img src={flag} className="card-img-top h-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Country Name: {name}</h5>
                    <Link className="card-text" to={`/country/${name}`}><p>Population: {population}</p></Link>
                    <button className="btn btn-outline-success" onClick={handleClick}>View Details</button>
                </div>
            </div>
        </div >
    );
};

export default Country;