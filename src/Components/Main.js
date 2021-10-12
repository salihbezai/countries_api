import React,{ useState,useEffect } from 'react'
import Countries from './Countries'
import { fetchCountries } from '../Redux/Actions/countriesActions';
import { connect } from 'react-redux';
const Main=(props)=> {
  const { countries } = props;
  const [countriesData, setcountriesData] = useState(countries ? countries : [])
  const [ searchWord, setSearchWord ] = useState('')
  const [ region, setRegion ] = useState('')
   useEffect(() => {
    props.fetchCountries()
   }, [])
  
   
   // trigger when countries state changed
   useEffect(()=>{
     setcountriesData(countries)
   },[countries])

  // search by name
  const searchByName=(searchword)=>{
    const filtered = countries.length ? countries.filter((data,)=>(
      data.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    )):[]
    return filtered
   }

   // search by region
   const searchByRegion=(Region)=>{
    const filtered = countries.length ? countries.filter((data,)=>(
      data.region.toLowerCase().indexOf(Region.toLowerCase()) !== -1
    )):[]
    return filtered
   }
   // use effect fire when input value changed
   useEffect(()=>{
    setSearchWord(searchWord)
    setcountriesData(searchByName(searchWord))
   },[searchWord]) 
   
   // use effect fires when region changed 
   useEffect(()=>{
    setRegion(region)
    setcountriesData(searchByRegion(region))
   },[region]) 
   
    return (
        <div className='container'>
          <div className='search-area'>
            <input type='text' placeholder='Search for Country...' 
            onChange={(event)=>{setSearchWord(event.target.value)}}/>
            <i class="fa fa-search icon"></i>

            <select onChange={(event)=>setRegion(event.target.value)}>
                <option selected disabled>Filter by Region</option>
                <option>Africa</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>Americas</option>
                <option>Oceania</option>
            </select>
          </div>  
        
        <Countries data={countriesData}/>
        </div>
    )
}
const mapStateToProps = (state)=>{
  return{
    countries:state.countries.countries
  }
}
const mapDispatchToProps={
  fetchCountries
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)