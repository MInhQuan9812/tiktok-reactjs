

import axios from "axios";

const BaseUrl = 'https://www.pgonevn.com/api/'


export const getWeatherForecasts = () => {
    return axios.get(BaseUrl + 'weatherforecast');
}