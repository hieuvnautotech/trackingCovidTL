import React from "react";
import { useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getCountries } from "./components/apis";
import axios from "axios";
import { useState } from "react";
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // axios.get('https://api.covid19api.com/countries').then((res)=>{
    //   const { data } = res;
    //   console.log(data)
    // })
      getCountries().then((res)=>{
        const  data  = res;
        console.log(data)
      })
  
  }, []);
  // useEffect(() => {
  //   axios.get("https://api.covid19api.com/countries").then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // }, []);
  return (
    <>
      <CountrySelector countries={ countries} />
      <Highlight />
      <Summary />
    </>
  );
}

export default App;
