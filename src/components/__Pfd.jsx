import React, { useCallback, useEffect } from 'react';
import { Display } from './Display';
import { Sky, Ground } from './pfd';

export const Pfd = ({ className, children, ...props }) => {

  const { size = 400, states } = props;
  const { roll = 0, pitch = 0, yaw = 0} = states;

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
    </div>
  );
};