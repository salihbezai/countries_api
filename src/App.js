import { useEffect } from "react"
import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
const  App=()=> {



  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;


// useEffect(() => {
//   fetch('https://restcountries.com/v2/all')
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data)
//   }).catch(error=>{
//     console.log(error)
//   })
// }, [])