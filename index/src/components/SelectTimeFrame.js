import React, { useState } from 'react';

const SelectTimeFrame = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('dia'); // Estado para almacenar la opción seleccionada
  
  const handleSelectChange = (event) => {
    setSelectedTimeFrame(event.target.value);
  };

  return (
    <div>
      <label htmlFor="timeFrameSelect">Average by: </label>
      <select id="timeFrameSelect" value={selectedTimeFrame} onChange={handleSelectChange}>
        <option value="month">Month</option>
        <option value="week">Week</option>
        <option value="day">Day</option>
      </select>
    </div>
  );
};

export default SelectTimeFrame;