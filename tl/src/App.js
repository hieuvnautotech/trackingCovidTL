import React from "react";
import { useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getCountries, getReportByCountry } from "./components/apis";
import { useState } from "react";
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = React.useState('');
  const [report, setReport] = React.useState([]);

  useEffect(() => {   
      getCountries().then((res)=>{
        const {data} = res
        console.log(data);
        setCountries(data)
      }) 
  }, []);

  useEffect(() =>{
    const {Slug} = countries.find((country) => country.ISO2.toLowerCase() === selectedCountryId)

    getReportByCountry(Slug).then((res) =>{
      // xóa đi item cuối trong array
      res.data.pop()
      setReport(res.data)})
    
     
    
  },[countries, selectedCountryId])
  

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value)
    
  }

  return (
    <>
      <CountrySelector countries={ countries} handleOnChange={handleOnChange} />
      <Highlight report={report}/>
      <Summary report={report}/>
    </>
  );
}

export default App
