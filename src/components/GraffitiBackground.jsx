

import graffitiBg from '../assets/graffiti-bg.png';

const GraffitiBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${graffitiBg})`,
        objectFit: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }}
    />
  );
};

export default GraffitiBackground;
