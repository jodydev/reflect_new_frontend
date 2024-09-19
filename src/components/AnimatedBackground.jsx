import React from 'react';

const AnimatedBackground = ({ numBalls = 20 }) => {
  // Genera un array di elementi per le sfere animate
  const balls = Array.from({ length: numBalls }, (_, index) => (
    <b
      key={index}
      className={`block w-20 h-20 rounded-full bg-gradient-to-r from-primary via-secondary-400 to-tertiary bg-clip-padding text-transparent absolute animate-ball${(index % 3) + 1}`}
      style={{
        // Posiziona le sfere in modo casuale
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
      }}
    />
  ));

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {balls}
    </div>
  );
};

export default AnimatedBackground;
