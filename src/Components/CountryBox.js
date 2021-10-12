import React from 'react'

const CountryBox=({ country })=> {
    
    return (
        <div>
            <img src={country.flag} width='100%' height='165px' />
            <h3>{country.name}</h3>
            <div>
                <div>Population: {country.population}</div>
                <div>Region: {country.region}</div>
                <div>Capital: {country.capital}</div>
            </div>
        </div>
    )
}

export default CountryBox;