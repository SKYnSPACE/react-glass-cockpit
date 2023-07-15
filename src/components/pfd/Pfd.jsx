import React from 'react';
import { FlightModeDisplay } from './flightmode-annunciator';
import { AirspeedDisplay, AirspeedTape } from './airspeed-indicator';
import { AttitudeScale, Horizon, RollIndicator } from './attitude-indicator';
import { AltitudeTape, AltitudeDisplay } from './altimeter';
import { Glass } from './Glass.jsx';
import { VerticalSpeedTape } from './vspeed-indicator';
import { Compass } from './turn-indicator';

// import Glass from './glass.svg'

export const Pfd = ({ className, children, ...props }) => {

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
  const scale = (size / 1000);
  const { roll = 0, pitch = 0, heading = 0,
    airspeed = 0, altitude = 0,
    verticalSpeed = 0, } = states;

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

      {/* <Sky roll={roll} pitch={pitch} />
      <Ground roll={roll} pitch={pitch} /> */}


      <Horizon style={{
        position: 'absolute',
        left: '10%',
        top: '13.5%',
        width: '70%',
        height: '70%',
      }}
        scale={scale}
        roll={roll} pitch={pitch}
      />

      <AttitudeScale style={{
        position: 'absolute',
        left: '10%',
        top: '13.5%',
        width: '70%',
        height: '70%',
      }}
        scale={scale}
        roll={roll} pitch={pitch}
      />

      <Horizon style={{
        position: 'absolute',
        left: '10%',
        top: '13.5%',
        width: '70%',
        height: '70%',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 79% 33%, 67% 21%, 33% 21%, 21% 33%, 0 70%)'
      }}
        scale={scale}
        roll={roll} pitch={pitch}
      />

      <RollIndicator style={{
        position: 'absolute',
        left: '20%',
        top: '23.5%',
        width: '50%',
        height: '50%',
      }}
        scale={scale}
        roll={roll}
      />

      {children}

      <FlightModeDisplay style={{
        position: 'absolute',
        left: '16.5%',
        top: '0%',
        width: '57%',
        height: '8%',
        backgroundColor: '#777777',
      }} />

      <AirspeedTape style={{
        position: 'absolute',
        left: '2.5%',
        top: '12.5%',
        width: '12%',
        height: '72%',
      }}
        scale={scale}
        airspeed={airspeed} />

      <AltitudeTape style={{
        position: 'absolute',
        left: '78%',
        top: '12.5%',
        width: '12%',
        height: '72%',
      }}
        scale={scale}
        altitude={altitude} />

      <VerticalSpeedTape style={{
        position: 'absolute',
        left: '92%',
        top: '24.5%',
        width: '8%',
        height: '48%',
      }}
        scale={scale}
        verticalSpeed={verticalSpeed} />

      <Compass style={{
        position: 'absolute',
        left: '9%',
        top: '88%',
        width: '72%',
        height: '72%',
      }}
        scale={scale}
        heading={heading} />

      <Glass style={{
        position: 'absolute',
        // top: 0, 
        // left: 0, 
        // zIndex: 1
      }} />



      <AirspeedDisplay style={{
        position: 'absolute',
        left: '1.5%',
        top: '44%',
        width: '11%',
        height: '9%',
      }}
        scale={scale}
        airspeed={airspeed} />

      <AltitudeDisplay style={{
        position: 'absolute',
        left: '80%',
        top: '41.7%',
        width: '14%',
        height: '10.4%',
      }}
        scale={scale}
        altitude={altitude} />

    </div>

  );
};