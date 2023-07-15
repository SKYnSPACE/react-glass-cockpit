import React from 'react';

import { Hud, HudCompass } from '../components/hud';

export default {
  title: 'HUD',
  component: HudCompass,
};

// export const Default = () => {
//   return (
//     <Pfd />    
//   );
// };

export const Default = {
  render: (args) => (
  <HudCompass {...args}/>
  ),
  args:{
    size: 400,
    states:{heading: 0,
      headingRef: 0,
    },
  }
};