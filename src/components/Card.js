import React from 'react';

const Card = ({ text, children }) => (
  <div className="card">
    <h3 className="card-header">{text}</h3>

    <div className="card-body">{children}</div>
  </div>
);

export default Card;