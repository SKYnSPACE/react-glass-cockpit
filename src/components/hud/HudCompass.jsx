import React from 'react';

import { CompassTape, HeadingDisplayU, HeadingDisplayL } from './heading-indicator';

export const HudCompass = ({ className, children, ...props }) => {
  const {
    size = 900,
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
        width: size ?? '900px',
        height: size*130/900 ?? '130px',
        // margin: '5px',
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        // backgroundColor: '#3498db'
      }}>

      <CompassTape
        style={{
          position: 'absolute',
          width: '100%',
          height: `${100*50/130}%`,
          top: `${100*40/130}%`,
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
          top: `${100*90/130}%`,
        }}
        scale={size / 900}
        heading={heading}
        headingRef={headingRef}
      />

    </div>
  );
}