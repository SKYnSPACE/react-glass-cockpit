import React from 'react';

const pitchDeegreeMin = -34.0;
const pitchDeegreeMax = 34.0;

const pitchPixelRange = 1400;
const pitchPixelRangeHalf = pitchPixelRange / 2;
const pitchPixelRangeQuarter = pitchPixelRange / 4;

const visiblePixelRange = 680; // 10 * pitchDegreeRange; 10deg == 100px.

const pitchDegreeToOriginalPixel = (pitchDegree) => {
  const pitchDegreeClamped = Math.max(Math.min(pitchDegree, pitchDeegreeMax), pitchDeegreeMin);
  return visiblePixelRange * (0.5 - (pitchDegreeClamped - pitchDeegreeMin) / (pitchDeegreeMax - pitchDeegreeMin));

  const pitchDegreeNormalized = (pitchDegreeClamped - pitchDeegreeMin) / (pitchDeegreeMax - pitchDeegreeMin) - 0.5;
  const pitchPixel = visiblePixelRange * pitchDegreeNormalized;
  return pitchPixel;
}

const translateHorizonToPixel = (pixel) => {
  return pixel - pitchPixelRangeHalf;
}


export const Horizon = ({ style, ...props }) => {
  const { scale = 1.0, roll = 0.0, pitch = 0.0 } = props;
  return (
    <div style={{
      ...style,
      transform: `rotate(${-roll}deg)`
    }} >
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: `${-scale * ((pitchPixelRangeQuarter) + pitchDegreeToOriginalPixel(pitch))}px`,
          // transformOrigin: `${scale * 350}px ${scale * (pitchPixelRangeHalf + pitchDegreeToOriginalPixel(pitch))}px`,
          // transform: `rotate(${-roll}deg)`
        }}
        viewBox="0 0 700 1400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_13_2)">
          <rect y="700" width="700" height="700" fill="#8F4F00" />
          <rect width="700" height="700" fill="#008FDF" />
        </g>
        <defs>
          <clipPath id="clip0_13_2">
            <rect width="700" height="1400" fill="white" />
          </clipPath>
        </defs>
      </svg>

    </div >
  )
}