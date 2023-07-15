import React from 'react';

const stridePixel = 5; // 5 px between 1 degree

const normalizeHeading = (deg) => {
  let heading = deg % 360;
  if (heading < 0) {
    heading += 360;
  }
  return heading;
}

function formatNumber(num) {
  return Math.round(num).toString().padStart(3, '0');
}

export const HeadingDisplayU = ({ style, ...props }) => {
  const { scale = 1.0, heading = 0.0 } = props

  return (
    <div style={{
      ...style,
      left: `${scale * 415}px`,
    }}>


      <svg style={{
        position: 'absolute',
      }}
        viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_148)">
          <mask id="path-1-inside-1_2_148" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M70 0H0V30H29.2265L35 40L40.7735 30H70V0Z" />
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M70 0H0V30H29.2265L35 40L40.7735 30H70V0Z" fill="black" />
          <path d="M0 0V-2H-2V0H0ZM70 0H72V-2H70V0ZM0 30H-2V32H0V30ZM29.2265 30L30.9585 29L30.3812 28H29.2265V30ZM35 40L33.2679 41L35 44L36.7321 41L35 40ZM40.7735 30V28H39.6188L39.0415 29L40.7735 30ZM70 30V32H72V30H70ZM0 2H70V-2H0V2ZM2 30V0H-2V30H2ZM29.2265 28H0V32H29.2265V28ZM36.7321 39L30.9585 29L27.4944 31L33.2679 41L36.7321 39ZM39.0415 29L33.2679 39L36.7321 41L42.5056 31L39.0415 29ZM70 28H40.7735V32H70V28ZM68 0V30H72V0H68Z" fill="white" mask="url(#path-1-inside-1_2_148)" />
        </g>
        <defs>
          <clipPath id="clip0_2_148">
            <rect width="70" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>


      <div style={{
        position: 'absolute',
        width: `${scale * 70}px`,
        height: `${scale * 28}px`,
        left: `${scale * 0}px`,
        top: `${scale * 3}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* <span style={{
          color: '#ffffff',
          fontSize: `${scale * 14}px`,
          // lineHeignt: `${scale*22}px`,
          fontFamily: 'B612, sans-serif',
        }}>&#9992;</span> */}
        <span style={{
          color: '#ffffff',
          fontSize: `${scale * 14}px`,
          // lineHeignt: `${scale*22}px`,
          fontFamily: 'B612, sans-serif',
        }}>&#128269;</span>
        <span style={{
          color: '#ffffff',
          fontSize: `${scale * 20}px`,
          // lineHeignt: `${scale*22}px`,
          fontFamily: 'B612, sans-serif',
        }}>
          {formatNumber(heading)}
        </span>
      </div>


    </div>
  );
};