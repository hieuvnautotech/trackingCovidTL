import axios from 'axios'

export const getCountries = async () => { 
    var value = await axios.get('https://api.covid19api.com/countries');
    return value.data;
}

export const getReportByCountry = async(country) =>{
    await axios.get(
        `https://api.covid19api.com/dayone/country/${country}`
      );
}
