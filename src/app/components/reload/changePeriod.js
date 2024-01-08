import React, { useState } from 'react';
import './style.css'

function ChangePeriod() {
  const [selectedPeriod, setSelectedPeriod] = useState('day');

  const handleChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="changePeriod">
      <button>dia</button>
      <button>semana</button>
      <button>mês</button>
      <button>ano</button>
    </div>
  )
}

export default ChangePeriod;