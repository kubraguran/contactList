import React from 'react';

const TemperatureScale = () => {
  return (
    <div className="temperature-scale">
      <span className="scale-item scale-cold">0°C</span>
      <span className="scale-item scale-moderate">20°C</span>
      <span className="scale-item scale-hot">40°C</span>
    </div>
  );
};

export default TemperatureScale;
