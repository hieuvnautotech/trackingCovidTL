import React from "react";
import { useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getCountries } from "./apis";
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
  return (
    <>
      <CountrySelector countries={ countries} />
      <Highlight />
      <Summary />
    </>
  );
}

export default App;
