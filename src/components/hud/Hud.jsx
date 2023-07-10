import React from 'react';

import { CompassTape } from './heading-indicator';

export const Hud = ({ className, children, ...props }) => {
  const {
    size = 400,
    states = {
      roll: 0,
      pitch: 0,
      heading: 0,
      airspeed: 0,
      altitude: 0,
      verticalSpeed: 0
    }
  } = props;

  const { roll = 0, pitch = 0, heading = 0,
    airspeed = 0, altitude = 0,
    verticalSpeed = 0, } = states;

  return (
    // 900 * 50 (height = 18% of width)
    <div className=""
      style={{
        height: size ?? '400px',
        width: size ?? '400px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#000000'
      }}>

      <CompassTape
        style={{
          position: 'absolute',
          width: '100%',
          height: '5.556%',
        }}
        scale={size/900}
        heading={heading}
      />

    </div>
  );
}