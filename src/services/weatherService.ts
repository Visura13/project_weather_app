import { DateTime } from "luxon"

const ONE_CALL_API = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
const BASE_API = "https://api.openweathermap.org/data/2.5/"

const getWeatherData = async(infotype, searchParams: object = {q: 'colombo'}) => {
    const url = new URL(BASE_API + infotype)
    url.search = new URLSearchParams({ ...searchParams, appid: import.meta.env.VITE_API_KEY})
    console.log(url)
    const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data)

        console.log(data)

    if(infotype == 'weather'){
        return formatedWeather(data)
    }
/*
    if(infotype == 'onecall'){
        return formatedForecast(data)
    }
*/ 

}

const formatedWeather = (data) => {
    const {
        coord: {lon, lat},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone
    } = data

    const { main: details, icon} = weather[0]

    return {
        lat, 
        lon, 
        temp, 
        feels_like, 
        temp_max, 
        temp_min, 
        humidity, 
        name, 
        dt, 
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
        timezone
    }  
}

/*
const formatedForecast = (data) => {
    let {timezone, daily} = data
    return daily = daily.slice(1, 7).map((d) => {
        return {
            title: dateAndTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })
}
*/

const formatedDateAndTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export {
    getWeatherData,
    formatedDateAndTime
} 