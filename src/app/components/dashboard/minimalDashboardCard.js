import React from 'react';

const MinimalCard = ({ title, content, id }) => (
  <div className="minimal-card transition-card" id={id}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default MinimalCard;