import React from "react";
import Chart from "./components/Charts";
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';
import { getCountries } from './components/apis'
import { useEffect, useState} from 'react'

const App = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => { 
    getCountries().then((res) => { 
      const { data } = res
      console.log('countriesList', res)
      setCountries(data)
    })
  },[])

  

  return (
    <>
      <CountrySelector countries={countries} />
      <Summary />
      <Chart />
    </>
  );
}

export default App
