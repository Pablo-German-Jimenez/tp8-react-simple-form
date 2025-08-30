

import graffitiBg from '../assets/graffiti-bg.png';

const GraffitiBackground = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '160vh',
        backgroundImage: `url(${graffitiBg})`,
        objectFit: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        marginBotton: '1000px',
      }}
    />
  );
};

export default GraffitiBackground;
