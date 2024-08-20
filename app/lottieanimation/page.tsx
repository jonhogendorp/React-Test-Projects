'use client';

import frame2 from '../Lottie/frame-2.json';
import SpikeyWaveMovin from './spikey-wave-movin.json';
import SpikeyWaveEyes from './spikey-eyes-movin.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import React, { useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

{
  /* <script
  src='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js'
  integrity='sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg=='
  crossorigin='anonymous'
  referrerpolicy='no-referrer'
  defer
></script>; */
}

export default function LottieAnimation() {
  const ref = useRef(null);
  React.useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  return (
    <div className='flex items-center justify-center h-screen'>
      <DotLottieReact
        src='./spikey-eyes-movin.json'
        loop={true}
        autoplay={true}
        style={{ width: '300px', height: '300px' }}
      />
      <Player
        autoplay={true}
        loop={true}
        src='https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json'
        style={{ height: '300px', width: '300px' }}
      >
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
      <Player
        autoplay={true}
        loop={true}
        src={frame2}
        style={{ height: '300px', width: '300px' }}
      >
        <Controls
          visible={true}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
      <Player
        src={SpikeyWaveMovin}
        autoplay={true}
        loop={true}
        style={{ height: '300px', width: '300px' }}
      >
        <Controls
          visible={true}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>
      <Player
        src={SpikeyWaveEyes}
        autoplay={true}
        loop={true}
        style={{ height: '300px', width: '300px' }}
      >
        <Controls
          visible={true}
          buttons={['play', 'repeat', 'frame', 'debug']}
        />
      </Player>

      {/* <lottie-player
        src={frame2}
        background='transparent'
        speed='1'
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></lottie-player> */}
    </div>
  );
}
