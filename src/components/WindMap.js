import React, { useState } from 'react';
import '../styles/WindMap.css';

const WindMap = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);
  const [zoom, setZoom] = useState(3);
  const [overlay, setOverlay] = useState('wind');

  const toggleMapVisibility = () => {
    setIsMapVisible(!isMapVisible);
  };

  const handleZoomChange = (e) => {
    setZoom(e.target.value);
  };

  const handleOverlayChange = (e) => {
    setOverlay(e.target.value);
  };

  return (
    <div className="wind-map-container-wrapper">
      <div className="wind-map-controls">
        <button onClick={toggleMapVisibility}>
          {isMapVisible ? 'Hide Map' : 'Show Map'}
        </button>
        <label>
          Zoom:
          <input
            type="range"
            min="1"
            max="18"
            value={zoom}
            onChange={handleZoomChange}
          />
        </label>
        <label>
          Overlay:
          <select value={overlay} onChange={handleOverlayChange}>
            <option value="wind">Wind</option>
            <option value="temp">Temperature</option>
            <option value="clouds">Clouds</option>
            <option value="precipitation">Precipitation</option>
          </select>
        </label>
      </div>

      {isMapVisible && (
        <div className="wind-map-container">
          <iframe
            title="Wind Map"
            width="100%"
            height="100%"
            src={`https://embed.windy.com/embed2.html?lat=25.276987&lon=55.296249&zoom=${zoom}&level=surface&overlay=${overlay}&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=0&detailLon=0&metricWind=default&metricTemp=default&radarRange=-1&disableZoomControl=true`}
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default WindMap;
