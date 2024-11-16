import React from 'react';
import '../app/styles.css';


function MeshGradientBackground(children:React.ReactNode) {
  return (
      <div style={{ position: 'relative', height: '100vh' }}>
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#ff99df',
              backgroundImage: `
                radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
                radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)`,
              backgroundSize: '150% 150%',
              filter: 'blur(80px)',
              animation: 'moveBackground 10s linear infinite',
          }}></div>
            {children}
      </div>
  );
}
export default MeshGradientBackground;
