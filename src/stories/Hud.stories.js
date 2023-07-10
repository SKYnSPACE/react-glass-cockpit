import React from 'react';

import { Hud } from '../components/hud';

export default {
  title: 'HUD',
  component: Hud,
};

// export const Default = () => {
//   return (
//     <Pfd />    
//   );
// };

export const Default = {
  render: (args) => (
  <Hud {...args}/>
  ),
  args:{
    size: 900,
    states:{heading: 0,
    },
  }
};