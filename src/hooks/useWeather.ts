import React, { useEffect, useState } from 'react'
import { getWeatherData } from '../services/weatherService'

type Weather = {
    lat: number
    lon: number
    temp: number 
    feels_like: number
    temp_max: number
    temp_min: number
    humidity: number
    name: string
    dt: number
    country: string
    sunrise: number
    sunset: number
    details: string
    icon: string
    speed: number
    timezone: number
}

function useWeather(query) {
    const [weather, setWeather] = useState<Weather>()

    
    useEffect (() => {
        getWeatherData("weather", query).then(
            (data) => {
                setWeather(data)
                console.log(data)
            }
            )
    }, [query])
        
          
            console.log('data')
        
  /*  
    setWeather({
        country
        : 
        "LK",
        details
        : 
        "Clouds",
        dt
        : 
        1698302161,
        feels_like
        : 
        310.37,
        humidity
        : 
        69,
        icon
        : 
        "03d",
        lat
        : 
        6.9319,
        lon
        : 
        79.8478,
        name
        : 
        "Colombo",
        speed
        : 
        3.11,
        sunrise
        : 
        1698280028,
        sunset
        : 
        1698322913,
        temp
        : 
        304.12,
        temp_max
        : 
        304.12,
        temp_min
        : 
        304.12,
        timezone
        : 
        19800})
*/
      console.log(weather)
      return {weather}
      
}

export default useWeather