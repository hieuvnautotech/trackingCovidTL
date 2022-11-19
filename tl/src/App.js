import React from "react";
import CountrySelector from "./components/CountrySelector";
import Summary from "./components/Summary";
import HighLight from "./components/HighLight";
import { getCountries, getReportByCountry } from "./components/apis";
import { useEffect, useState } from "react";
import { sortBy } from "lodash";
import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/vi";
import "@fontsource/roboto";

moment.locale("vi");

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, 'Country');
      console.log("countriesList", res);
      // setCountries(res.data); sort xong thì gán countries thay cho data vào setCountries
      setCountries(countries);
      setSelectedCountryId('vn')
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
      <Container style={{ marginTop: 20 }}>
        <Typography variant="h2" component="h2">
          Số liệu COVID-19
        </Typography>
        <Typography>{moment().format("LLL")}</Typography>
        <CountrySelector
          countries={countries}
          handleOnChange={handleOnChange}
          value={selectedCountryId}
        />
        <HighLight report={report} />
        <Summary countryId={selectedCountryId} report={report} />
      </Container>
    </>
  );
};

export default App;
