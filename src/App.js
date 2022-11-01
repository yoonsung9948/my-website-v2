import './css/App.css';

import Scene from './Scene';
import LoadingPage from './LoadingPage';

import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

// import { OrbitControls } from '@react-three/drei';

import LandingPage from './LandingPage';
import About from './About';
import Blog from './Blog';
import Work from './Work';
import Contacts from './Contacts';

import arrow from './assets/Antu_arrow-right.svg';


function Navigation() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1, 
        repeatDelay: 4,
        defaults: {duration: 0.25, ease: 'power2'},
      });
      tl.fromTo('#up-arrow', { y: 0, }, {y: -10, })
        .fromTo('#down-arrow', { y: 0, }, {y: 10, }, "<")     
        .fromTo('#up-arrow', { y: -10, }, { y: 0, })
        .fromTo('#down-arrow', { y: 10, }, {y: 0, }, "<")
        .fromTo('#up-arrow', { y: 0, }, {y: -10, })
        .fromTo('#down-arrow', { y: 0, }, {y: 10, }, "<")     
        .fromTo('#up-arrow', { y: -10, }, { y: 0, })
        .fromTo('#down-arrow', { y: 10, }, {y: 0, }, "<"); 

    }); //navRef
    return () => ctx.revert();
  }, []);

  function NavigationArrow(props) {
    let transform, id;
    if (props.direction === 'up') {
      transform = 'rotate(270deg)';
      id = 'up-arrow';
    } else {
      transform = 'rotate(90deg)';
      id = 'down-arrow';
    }
    return(
      <img style={{transform: transform}} id={id} src={arrow} alt="an arrow" />
    );
  }
  
  
  return (
    <>
      <div id='name-container'>
        <h1 id='name'>Yoonsung Hwang</h1>
      </div>

      <div id='nav-container' >
        <NavigationArrow direction='up' />
        <NavigationArrow direction='down' />
      </div>
    </>
  );
}


function App() {
  return (
    <>
      <Navigation />
      <LoadingPage />
      <Canvas style={{position: 'fixed', zIndex: -1}} tabIndex={0} camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 20]}}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 20]} />
        <Scene />
      </Canvas>
      <section className='landing-page-section'>
        <LandingPage />
      </section>
      <section className='about-page-section'>
        <About />
      </section>
      <section className='work-page-section'>
        <Work />
      </section>
      <section className='blog-page-section'>
        <Blog />
      </section>

      <section className='contacts-page-section'>
        <Contacts />
      </section>
    </>
  );
}

export default App;
