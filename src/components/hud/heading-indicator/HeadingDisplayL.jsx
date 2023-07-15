import React from 'react';

const stridePixel = 5; // 5 px between 1 degree

const normalizeHeading = (deg) => {
  let heading = deg % 360;
  if (heading < 0) {
    heading += 360;
  }
  return heading;
}

const getHeadingDifference = (angle1, angle2) => {
  let diff = (angle2 - angle1 + 180) % 360 - 180;
  return diff < -180 ? diff + 360 : diff;
}

function formatNumber(num) {
  return Math.round(num).toString().padStart(3, '0');
}

export const HeadingDisplayL = ({ style, ...props }) => {
  const { scale = 1.0, heading = 0.0, headingRef = 0.0 } = props
  const headingDiff = getHeadingDifference(heading, headingRef);
  const headingRefPixel = headingDiff > 90 ? scale * 90 * stridePixel :
    headingDiff < -90 ? - scale * 90 * stridePixel : scale * headingDiff * stridePixel;

  return (
    <div style={{
      ...style,
      left: `${scale * 415 + headingRefPixel}px`,
    }}>


      <svg style={{
        position: 'absolute',
      }}
        viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3_154)">
          <mask id="path-1-inside-1_3_154" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M40.7735 10L35 0L29.2265 10H0V40H70V10H40.7735Z" />
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M40.7735 10L35 0L29.2265 10H0V40H70V10H40.7735Z" fill="black" />
          <path d="M35 0L36.7321 -1L35 -4L33.2679 -1L35 0ZM40.7735 10L39.0415 11L39.6188 12H40.7735V10ZM29.2265 10V12H30.3812L30.9585 11L29.2265 10ZM0 10V8H-2V10H0ZM0 40H-2V42H0V40ZM70 40V42H72V40H70ZM70 10H72V8H70V10ZM33.2679 1L39.0415 11L42.5056 9L36.7321 -1L33.2679 1ZM30.9585 11L36.7321 1L33.2679 -1L27.4944 9L30.9585 11ZM0 12H29.2265V8H0V12ZM2 40V10H-2V40H2ZM70 38H0V42H70V38ZM68 10V40H72V10H68ZM40.7735 12H70V8H40.7735V12Z" fill="white" mask="url(#path-1-inside-1_3_154)" />
        </g>
        <defs>
          <clipPath id="clip0_3_154">
            <rect width="70" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>


      {/* 
      <div style={{
        position: 'absolute',
        width: `${scale*45}px`,
        height: `${scale*28}px`,
        left: `${scale*22}px`,
        top: `${scale*13}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ 
          color: '#ffffff',
      fontSize: `${scale*20}px`,
      // lineHeignt: `${scale*22}px`,
      fontFamily: 'B612, sans-serif',
      }}>
          {headingRef}
        </span>
      </div> */}

      <div style={{
        position: 'absolute',
        width: `${scale * 70}px`,
        height: `${scale * 28}px`,
        left: `${scale * 0}px`,
        top: `${scale * 13}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{
          color: '#ffffff',
          fontSize: `${scale * 14}px`,
          // lineHeignt: `${scale*22}px`,
          fontFamily: 'B612, sans-serif',
        }}>
          &#9992;
          {/* &#128743; */}
          {/* &#128744; */}
          {/* &#128745; */}
          {/* &#128746; */}
          {/* &#128747; */}
          </span>
        {/* <span style={{
          color: '#ffffff',
          fontSize: `${scale * 14}px`,
          // lineHeignt: `${scale*22}px`,
          fontFamily: 'B612, sans-serif',
        }}>&#127909;</span> */}
        <span style={{
          color: '#ffffff',
          fontSize: `${scale * 20}px`,
          // lineHeignt: `${scale*22}px`,
          fontFamily: 'B612, sans-serif',
        }}>
          {formatNumber(headingRef)}
        </span>
      </div>



    </div>
  );
};