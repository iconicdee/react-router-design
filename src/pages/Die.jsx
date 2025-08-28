import React from 'react'

const Die = ({ value, isHeld ,onHold }) => {
  
  return (
    <button
      className="die"
      style={{ backgroundColor: isHeld ? '#59E3' : '#eee' }}
      onClick={()=>onHold()}
      aria-pressed= {isHeld}
      aria-label={`Die with value of ${value },${isHeld ? "held": "not held"}`}
    >
      {value}
    </button>
  )
}

export default Die;
