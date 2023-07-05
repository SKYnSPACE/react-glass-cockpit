import React from 'react';

const displayHeightPixel = 90
const displayHeightPixelHalf = 45;

const digitHeightPixel = 52;
const digitHeightPixelHalf = digitHeightPixel / 2; //26
const digitStridePixel = 35; // 35px between digits

const extractLastDigitAndDecimal = (num) => {
  let numStr = num.toString(); // Convert the number to a string
  let numParts = numStr.split('.'); // Split the string into parts
  let lastDigitBeforePoint = numParts[0].slice(-1); // Get the last digit before the decimal point
  let afterDecimalPoint = numParts[1] || '0'; // Get the digits after the decimal point, or '0' if there are none
  let result = parseFloat(lastDigitBeforePoint + '.' + afterDecimalPoint); // Concatenate the parts and convert back to a number

  return result;
}

export const AirspeedOnes = ({ style, ...props }) => {
  const { scale = 1.0, airspeed = 0.0 } = props;
  const airspeedOnes = extractLastDigitAndDecimal(+airspeed);
  return (
    <div>

    </div>
  );
};