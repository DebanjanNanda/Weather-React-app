import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherDisplay from './components/WeatherDisplay';
import WindMap from './components/WindMap';
import Sidebar from './components/Sidebar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <>
              <WeatherDisplay />
              <WindMap />
              
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
