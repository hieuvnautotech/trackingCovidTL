import React from "react";
import { useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getCountries, getReportByCountry } from "./apis";
import axios from "axios";
import { useState } from "react";
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCountries();
      setCountries(data)
      console.log(data);
    })();
  }, []);
  // useEffect(() => {
  //   axios.get("https://api.covid19api.com/countries").then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // }, []);

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
