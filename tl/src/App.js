import React from "react";
import Chart from "./components/Charts";
import CountrySelector from './components/CountrySelector';
import Summary from './components/Summary';

function App() {
  return(
    <>
        <CountrySelector/>
        <Summary/>
        <Chart/>
    </>
  )
}

export default App
