import axios from "axios";
import { apiKey } from "../constants";
const forecastEndpoint = params => `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationEndpoint = params => `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`


const apicall = async (endpoint) =>{
    const options ={
        method:'GET',
        url:endpoint
    }
    try{
        const resoponse = await axios.request(options);
        return resoponse.data;

    }catch(err){
        console.log('error',err)
        return null;
    }
}

export const fetchweatherForecast = params =>{
    
    return apicall((forecastEndpoint(params)))
}
export const fetchLocation = params =>{
    return apicall(locationEndpoint(params))
}