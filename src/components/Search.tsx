import { UilSearch } from '@iconscout/react-unicons'
import { useContext, useEffect, useState } from 'react'
import { getWeatherData } from '../services/weatherService';
import { WeatherContext } from '../context/WeatherContext';
import useWeather from '../hooks/useWeather';

function Search() {
  //const {weather, setWeather} = useContext(WeatherContext)
  const [query, setQuery] = useState({q: 'colombo'})
  const [unit, setUnit] = useState({})
  const { weather } = useWeather(query)

  /*
  setWeather({q: 'colombo'})
  
    const fetchWeather = async () => {
      const data = await getWeatherData("weather", query)
      console.log(data)
      
      await setWeather(data)
      
      
      
    }

    fetchWeather()
    console.log(weather)
*/
console.log(weather)
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type='text'
              placeholder='search for city'
              className='text-xl font-light p-2 w-full shadow-xl focus:outline-none'
            />
            <UilSearch onClick={useWeather} size={40} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-3xl text-white font-light'>°C</button>
            <p className='text-3xl text-white font-light mx-2'>|</p>
            <button name='imperial' className='text-3xl text-white font-light'>°F</button>
        </div>
    </div>
  )
}

export default Search