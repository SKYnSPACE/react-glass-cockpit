import React, { useCallback, useEffect } from 'react';
import { Sky, Ground } from './attitude-indicator';
import { AltitudeTape } from './altimeter';
import { Glass } from './Glass';
// import Glass from './glass.svg'

export const Pfd = ({ className, children, ...props }) => {

  const { size = 400, states } = props;
  const scale = (size / 1000);
  const { roll = 0, pitch = 0, yaw = 0, altitude = 0 } = states;

  return (
    <div className="" style={{
      height: size ?? '400px',
      width: size ?? '400px',
      position: 'relative',
      backgroundColor: '#000000',
      display: 'inline-block',
      overflow: 'hidden',
      // fontSize: '16px',
    }}>

      <Sky roll={roll} pitch={pitch} />
      <Ground roll={roll} pitch={pitch} />



      {children}

      <AltitudeTape style={{
        position: 'absolute',
        left: '78%',
        top: '12.5%',
        width: '12%',
        height: '72%',
      }} 
      scale={scale}
      altitude={altitude}/>

      <Glass style={{
        position: 'absolute',
        // top: 0, 
        // left: 0, 
        // zIndex: 1
      }} />
    </div>

  );
};