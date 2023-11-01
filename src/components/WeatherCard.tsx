import { 
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'

import { formatedDateAndTime } from '../services/weatherService'
import { UilSearch } from '@iconscout/react-unicons'
import { useContext, useEffect, useState } from 'react'
import { getWeatherData } from '../services/weatherService';
import { WeatherContext } from '../context/WeatherContext';
import useWeather from '../hooks/useWeather';


function WeatherCard() {
    const [query, setQuery] = useState({q: 'colombo'})
   
    
  return (
    <div>
        <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type='text'
              placeholder='search for city'
              className='text-xl font-light p-2 w-full shadow-xl focus:outline-none'
            />
            <UilSearch  size={40} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-3xl text-white font-light'>°C</button>
            <p className='text-3xl text-white font-light mx-2'>|</p>
            <button name='imperial' className='text-3xl text-white font-light'>°F</button>
        </div>
    </div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Monday, 31 may 2023 | time: 12.00 AM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                
            </p>
        </div>
    
        <p className='flex items-center justify-center py-6 text-xl text-white'></p>

        <div className='flex flex-row items-center justify-between py-3 text-white'>
            <img src='' alt="sun" className='w-20'/>
            <p className='text-5xl'>°</p>
            <div className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Feels like
                    <span className='ml-1 font-medium'></span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity
                    <span className='ml-1 font-medium'></span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind
                    <span className='ml-1 font-medium'></span>
                </div>

            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>
                Rise 
                <span className='ml-2 font-medium'></span>
            </p>
            <p className='font-light'>|</p>

            <UilSunset/>
            <p className='font-light'>
                Set
                <span className='ml-2 font-medium'></span>
            </p>
            <p className='font-light'>|</p>

            <UilArrowUp/>
            <p className='font-light'>
                High 
                <span className='ml-2 font-medium'></span>
            </p>
            <p className='font-light'>|</p>

            <UilArrowDown/>
            <p className='font-light'>
                Low 
                <span className='ml-2 font-medium'></span>
            </p>
            
        </div>
        
    </div>
    
  )
}

export default WeatherCard