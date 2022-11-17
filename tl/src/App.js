import React from "react";
import CountrySelector from "./components/CountrySelector";
import Summary from "./components/Summary";
import HighLight from "./components/HighLight";
import { getCountries, getReportByCountry } from "./components/apis";
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      console.log("countriesList", res);
      setCountries(data);
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );

      getReportByCountry(Slug).then((res) => {
        // xóa đi item cuối trong array
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <HighLight report={report} />
      <Summary report={report} />
    </>
  );
};

export default App;
