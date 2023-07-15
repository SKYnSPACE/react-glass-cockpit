import React from 'react';

export const RollIndicator = ({ style, ...props }) => {
  const { scale = 1.0, roll = 0.0, sideSlip = 0.0 } = props;
  return (
    <div style={{
      ...style,
      transform: `rotate(${-roll}deg)`
    }} >

      {Math.abs(roll || 0) < 35 ?  // Ensure roll is a number if it's undefined
        <>
          <svg
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M237.876 39L250 18L262.124 39H237.876Z" stroke="white" strokeWidth="3" />
          </svg>
          <svg
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="236.5" y="39.5" width="27" height="6" stroke="white" strokeWidth="3" />
          </svg>
        </>
        :
        <>
          <svg
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M237.876 39L250 18L262.124 39H237.876Z" fill="#FFBF00" stroke="#FFBF00" strokeWidth="3" />
          </svg>
          <svg
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
            viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="236.5" y="39.5" width="27" height="6" stroke="#FFBF00" strokeWidth="3" />
          </svg>
        </>
      }

    </div>
  )
}