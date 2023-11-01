import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AuthContextProvider from './context/AuthContext.tsx'
import WeatherContextProvider from './context/WeatherContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <AuthContextProvider>
    <WeatherContextProvider>
    <App />
    </WeatherContextProvider>
  </AuthContextProvider>
  
  
)
