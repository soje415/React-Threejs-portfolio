import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import { Color } from 'three';

const Loader = () => {
  const { progress } = useProgress(); // Use the useProgress hook to get the progress value

  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {Math.floor(progress)}% {/* Display the progress value */}
      </p>
    </Html>
  );
};

export default Loader;
