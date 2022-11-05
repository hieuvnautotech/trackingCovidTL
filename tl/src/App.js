import { useEffect } from 'react';
import './App.css';
import CountrySelector from "./components/CountrySelector" 
import Highlight from "./components/Highlight"
import Summary from "./components/Summary"
import { getCountries } from './apis';
function App() {
  useEffect(() => { 
    getCountries()
  }, [])
  return (
    <>
      <CountrySelector></CountrySelector>
      <Highlight></Highlight>
      <Summary></Summary>
    </>
  );
}

export default App;
