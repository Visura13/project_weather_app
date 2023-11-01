import {BrowserRouter, Route, Routes } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage';
import LoginPage from './pages/LoginPage';

import './index.css'

import RequireAuth from './helper/RequireAuth';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<RequireAuth/>}>
          <Route path="/" element={<WeatherPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
    
}

export default App;
