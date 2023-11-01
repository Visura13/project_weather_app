import { useContext, useEffect, useState } from "react";
import { 
    Header, 
    Footer,
    Search,
    WeatherCard,
    Forecast,
  } from "../components/Index"
import { getWeatherData } from "../services/weatherService"
import { WeatherContext } from "../context/WeatherContext";

function WeatherPage() {
  const {weather} = useContext(WeatherContext)
  console.log(weather)
  //const [initialweather, setInitialweather] = useState(null)
  //const [query, setQuery] = useState({q: 'colombo'})
  /*
  const [weather, setWeather] = useState(null)
  //const [forecast, setForecast] = useState(null)
  const [query, setQuery] = useState({q: 'colombo'})
  const [unit, setUnit] = useState('metric')

  const setVurrentWeather = (data) => {
    set
  }

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeatherData("weather", {q: 'colombo'}).then(
        (data) => {
          setWeather(data)
        }
      )
      
    }

    fetchWeather()

  }, [setWeather]);

  if(weather){
    setInitialweather(weather)
  }
*/

/*
  useEffect(() => {
    const fetchForecast =async () => {
      const {lat, lan} = weather
      console.log(lat)
      await getWeatherData("onecall", {lat, lan}).then(
        (data) => {
          setForecast(data)
        }
      )
    }
  
    fetchForecast() 

  }, [weather, query, unit]);

*/

  return (
    <div className='bg-cover' style={{'backgroundImage': 'url(../src/assets/rain.jpg)'}}>
    <Header/>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-20 bg-slate-950 opacity-80 h-fit shadow-xl shadow-gray-400'>
        <WeatherCard weather={weather}/>
        <Forecast/>
    
      </div>
    </div>
  )
}

export default WeatherPage