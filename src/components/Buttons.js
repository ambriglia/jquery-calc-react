import React from 'react';

// const 

const Button = ({value, handleClick, color = 'primary'}) => {
  return (
    <button onClick={() => handleClick(value)} id="button-1" className={`btn btn-${color} number`} value={value}><span>{value}</span></button>
  );
}

export { Button };