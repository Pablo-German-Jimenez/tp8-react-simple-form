

import graffitiBg from '../assets/graffiti-bg.png';

const GraffitiBackground = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '115vh',
        backgroundImage: `url(${graffitiBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        zIndex: -1,
        
      }}
    />
  );
};

export default GraffitiBackground;
