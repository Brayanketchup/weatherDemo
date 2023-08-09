import axios from "axios";

export default async function fetchWeatherData(CityName) {


    const BASE_URL = 'https://visual-crossing-weather.p.rapidapi.com/forecast';

    const options = {
        method: 'GET',
        url: BASE_URL,
        params: {
            aggregateHours: '24',
            location: CityName,
            contentType: 'json',
            unitGroup: 'us',
            shortColumnNames: '0'
        },
        headers: {
            'X-RapidAPI-Key': '000ed4bf1fmsh5b159f304146371p1c40bejsn710902dda104',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
        // console.log(response.data);
    } catch (error) {
        console.error(error);
        return null;
    }
}





//https://visual-crossing-weather.p.rapidapi.com/forecast
//?aggregateHours=24
//&location=Washington%2CDC%2CUSA
//&contentType=json
//&unitGroup=us
//&shortColumnNames=0

// const axios = require('axios');

// const fetchWeatherData = async (cityName) => {
//   const options = {
//     method: 'GET',
//     url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
//     params: {
//       aggregateHours: '24',
//       location: cityName,
//       contentType: 'json',
//       unitGroup: 'us',
//       shortColumnNames: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '77e0ba7236mshcff3b078dc3937cp1d8eefjsnb04d71d3088c',
//       'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to fetch weather data from the API.');
//   }
// };

// module.exports = fetchWeatherData;