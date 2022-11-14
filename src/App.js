import './css/App.css';

// import Scene from './Scene';

// import LoadingPage from './LoadingPage';

// import gsap from 'gsap';
// import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model'
// import { OrbitControls } from '@react-three/drei';

// import LandingPage from './LandingPage';
import About from './About';
import Blog from './Blog';
import Work from './Work';
import Contacts from './Contacts';
import { Environment } from '@react-three/drei';
// import { OrbitControls, FlyControls } from '@react-three/drei';
const COLORS = {
  aliceBlue: '#f0f8ff',
  blue: '#daf0f7', 
  green: '#e8f4ea',
  darkerGreen: '#e0f0e3',
};

function App() {
  const CONSTANT = 12.59, INTENSITY = 1;
  return (
    <>
      <Canvas orthographic camera={{zoom: 35, position:[0, 0, 18]}} style={{zIndex: -1, position: 'fixed'}}>
        <color attach='background' args={[COLORS.aliceBlue]} />
        <Environment preset='city' />
        <ambientLight intensity={INTENSITY/3} />
        <spotLight 
          penumbra={1}
          position={[1*CONSTANT, 2*CONSTANT, 1*CONSTANT]}
          intensity={INTENSITY * 2}
          castShadow={false}
          shadowBias={0}
        />
        <pointLight
          position={[-2*CONSTANT, -0.5*CONSTANT, -2*CONSTANT]}
          intensity={INTENSITY}
        />
        {/* <OrbitControls /> */}
        <Model />
      </Canvas>   
      <section className='section' id='about'>
      </section>   
      <div className='sections'>
        <section className='section' id='about-section'>
          <About />
        </section>      
        <section className='section' id='work-section'>
          <Work />
        </section>      
        <section className='section' id='blog-section'>
          <Blog />
        </section>
        <section className='section' id='contacts-section'>
          <Contacts />
        </section>
      </div>

    </>


  );
}

export default App;
