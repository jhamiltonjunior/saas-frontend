import React, { useState } from 'react';
import './style.css'

function ChangePeriod() {
  const [selectedPeriod, setSelectedPeriod] = useState('day');

  const handleChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="changePeriod">
      <button className="rounded-l-full">dia</button>
      <button className="rounded-none">semana</button>
      <button className="rounded-none">mês</button>
      <button className="rounded-none rounded-r-full selected">ano</button>
    </div>
  )
}

export default ChangePeriod;