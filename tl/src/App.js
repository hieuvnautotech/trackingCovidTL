import React from "react";
import { useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getCountries, getReportByCountry } from "./components/apis";
import axios from "axios";
import { useState } from "react";
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    
      getCountries().then((res)=>{
        data = res
        console.log(data);
      })
      // setCountries(data)
      
    
  }, []);
  

  const handleOnChange = (e) => {
    
    const {Slug} = countries.find((country) => country.ISO2.toLowerCase() === e.target.value)
    console.log({e, Slug})
    getReportByCountry(Slug).then((res) => console.log('getReportByCountry', {res}))
  }

  return (
    <>
      <CountrySelector countries={ countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Summary />
    </>
  );
}

export default App;
