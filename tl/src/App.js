import React from "react";
import chart from "./components/Charts";
import countrySelector from './components/CountrySelector/index';
import summary from './components/Summary/index';

function App() {
  return(
    <>
        <p>This is app</p>
        <countrySelector>select</countrySelector>
        <summary>summary</summary>
        <chart>chart</chart>
    </>
  )
}

export default App
