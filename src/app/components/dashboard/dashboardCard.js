// Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, content, id, className, icon }) => (
  <div className={className} id={id}>
    <h2>{title}</h2>
    <div className="flex items-center justify-end w-full">

{console.log(icon)}

    <div className={icon.className}>
      <FontAwesomeIcon icon={icon.icon} />
    </div>
    <span className="w-4"></span>
    {content}
    </div>
  </div>
);

export default Card;