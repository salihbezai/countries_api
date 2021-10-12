
export const fetchCountries = ()=>{
    return(dispatch,getstate)=>{
        fetch('https://restcountries.com/v2/all')
        .then(response=>response.json())
        .then(data=>{
          dispatch({ type:'getCountries',payload:data})
        })
        .catch(err=>{
          console.log(err)
        })
    }
}