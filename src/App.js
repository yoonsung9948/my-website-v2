import './css/App.css';
import gsap from 'gsap';
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
import { useEffect, useRef } from 'react';
// import { OrbitControls, FlyControls } from '@react-three/drei';
const COLORS = {
  aliceBlue: '#f0f8ff',
  blue: '#daf0f7', 
  green: '#e8f4ea',
  darkerGreen: '#e0f0e3',
};

function App() {
  const CONSTANT = 12.59, INTENSITY = 1;
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref1.current, {
        yPercent: 175,
        scrollTrigger: {
            trigger: document.querySelector('#about'),
            start: 'top top-=10%',
            end: 'bottom center',
            toggleActions: 'play reset play reset',
            scrub: 1,
        }
      });
      gsap.from(ref2.current, {
        yPercent: 150,
        scrollTrigger: {
            trigger: document.querySelector('#about'),
            start: 'top top-=10%',
            end: 'bottom center',
            toggleActions: 'play reset play reset',
            scrub: 1,
        }
      });
      gsap.from(ref3.current, {
        yPercent: 125,
        scrollTrigger: {
            trigger: document.querySelector('#about'),
            start: 'top top-=10%',
            end: 'bottom center',
            toggleActions: 'play reset play reset',
            scrub: 1,
        }
      });
      gsap.from(ref4.current, {
        yPercent: 100,
        scrollTrigger: {
            trigger: document.querySelector('#about'),
            start: 'top top-=10%',
            end: 'bottom center',
            toggleActions: 'play reset play reset',
            scrub: 1,
        }
      });
    });
    return () => ctx.revert();
  }, []);
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
        <div className='filler-div-container'>
          <div ref={ref1} className='filler-divs'></div>
          <div ref={ref2} className='filler-divs'></div>
          <div ref={ref3} className='filler-divs'></div>
          <div ref={ref4} className='filler-divs'></div>
        </div>
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
