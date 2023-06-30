import React from 'react';
// import { storiesOf } from '@storybook/react';

// import { Display } from '../components';
import { Pfd, Sky, Ground } from '../components/pfd';

// const stories = storiesOf('Display', module);

export default {
  title: 'PFD',
  component: Pfd,
};

// export const Default = () => {
//   return (
//     <Pfd />    
//   );
// };

export const Default = {
  render: (args) => (
  <Pfd {...args}/>
  ),
  args:{
    size: 500,
    states:{roll:10, pitch:10, heading: 0,
      airspeed:100, altitude:1000, 
      turnRate:0, slipSkid:0,
      verticalSpeed:0,
    },
    navData:{
      nav1:0, nav2:0, nav1OBS:0, nav2OBS:0,
      nav1CDI:0, nav2CDI:0,
      nav1GS:0, nav2GS:0,
      nav1ToFrom:0, nav2ToFrom:0,
      nav1Def:0, nav2Def:0,
      nav1Ident:0, nav2Ident:0,
      nav1Active:0, nav2Active:0,
      nav1Standby:0, nav2Standby:0,
      nav1Source:0, nav2Source:0,
      nav1Course:0, nav2Course:0,
      nav1Radial:0, nav2Radial:0,
      nav1DME:0, nav2DME:0,
      nav1DMEdist:0, nav2DMEdist:0,
      nav1DMEdistUnit:0, nav2DMEdistUnit:0,
      nav1DMEdistSpeed:0, nav2DMEdistSpeed:0,
      nav1DMEdistSpeedUnit:0, nav2DMEdistSpeedUnit:0,
      nav1DMEdistSpeedTime:0, nav2DMEdistSpeedTime:0,
      nav1DMEdistSpeedTimeUnit:0, nav2DMEdistSpeedTimeUnit:0,
  },
  }
};