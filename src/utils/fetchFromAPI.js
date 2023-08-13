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


