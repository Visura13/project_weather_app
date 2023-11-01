import React, { createContext, useContext, useState } from 'react'

export const WeatherContext = createContext(null)

export default function WeatherContextProvider({ children }) {
    const [weather, setWeather] = useState(null)

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather
      }}>
      {children}
    </WeatherContext.Provider>
  )
}

