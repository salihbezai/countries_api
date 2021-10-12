import React from 'react'
import CountryBox from './CountryBox'

const Countries=({ data })=> {
    return (
        <div className='grid'>
        {
            data.length ? (data.map((country,index)=>{
                return(
                    <CountryBox country={country} key={index}/>
                )
            })
            ):(
                <p>Loading ...</p>
            )
        }
    </div>
    )
}

export default Countries;