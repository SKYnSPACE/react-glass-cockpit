import React from 'react';

import { CompassTape, HeadingDisplayU, HeadingDisplayL } from './heading-indicator';

export const Hud = ({ className, children, ...props }) => {
  const {
    size = 400,
    states = {
      heading: 0.0,
      headingRef: 0.0,
    }
  } = props;

  const { heading = 0.0, headingRef = 0.0, } = states;

  return (
    // 900 * 50 (height = 18% of width)
    <div className=""
      style={{
        height: size ?? '400px',
        width: size ?? '400px',
        // margin: '5px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // backgroundColor: '#3498db'
      }}>

      <CompassTape
        style={{
          position: 'absolute',
          width: '100%',
          height: '5.556%',
          top: '4.5%',
        }}
        scale={size/900}
        heading={heading}
      />

      <HeadingDisplayU 
        style={{
          position: 'absolute',
          width: '7.778%',
        }}
        scale={size/900}
        heading={heading}
        />

      <HeadingDisplayL
        style={{
          position: 'absolute',
          width: '7.778%',
          top: '10%',
        }}
        scale={size / 900}
        heading={heading}
        headingRef={headingRef}
      />

    </div>
  );
}