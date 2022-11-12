import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import gsap from 'gsap';
import img from './assets/Antu_arrow-right.svg';
import { Suspense } from 'react';
import { useProgress } from '@react-three/drei';
import LoadingPage from './LoadingPage';
import { useFrame } from '@react-three/fiber';

// function Loader() {
//     const { progress } = useProgress();
//     THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
//         const progress = (itemsLoaded / itemsTotal) * 100;
//         progressBarRef.current.style.width = progress + '%';
//     };
//     THREE.DefaultLoadingManager.onLoad = () => {
//         setTimeout(() => {
//             progressBarContainerRef.current.style.display = 'none';
//         }, 1000);
//     }
//     return (
//         <div id={'progress-bar-container'}>
//             <div id={'progress-bar'}>
//             <div id={'fill'} style={{width: progress+'%'}}></div>
//             </div>
//         </div>
//     );
// }
function DownArrow() {
    const [scrolled, scroll] = useState(0);

    const ref = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ 
                repeat: -1, 
                repeatDelay: 2,
                defaults: {
                    duration: 0.25, 
                    ease: 'power2.out',
                },
            });
            tl.fromTo(ref.current, {
                y: 0,
            }, {
                y: 10,
            }).fromTo(ref.current, {
                y: 10,
            }, {
                y: 0,
            }).fromTo(ref.current, {
                y: 0,
            }, {
                y: 10,
            }).fromTo(ref.current, {
                y: 10,
            }, {
                y: 0,
            });
        }, ref);

        return () => ctx.revert();
        
    }, []);
    window.addEventListener('scroll', () => {
        scroll(window.scrollY);
    });

    useEffect(() => {
        if (ref.current) {
            if (scrolled > 100) {
                gsap.to(ref.current, {
                    opacity: 0,
                    duration: 0.5,
                    scale: 0.5,

                });
            } else {
                gsap.to(ref.current, {
                    opacity: 1,
                    duration: 0.5,
                    scale: 1,
                });
            }
        }
    }, [scrolled]);
    return (
        <>
            {
                <div ref={ref}  id='arrow'>
                    <h2>scroll down</h2>
                    <img src={img} style={{
                        transform: 'rotate(90deg)',
                        width: '5vw',
                    }} 
                    alt='arrow pointing down' />
                </div>
            }
        </>

    );
}
function Logo() {
    return (
        <h1 id='logo'>Yoonsung Hwang</h1>
    );
}
function Overlay() {
    return (
        <div className='overlay'>
            <Logo />
            <DownArrow />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <LoadingPage />
        <Overlay style={{pointerEvents: 'none'}} />
        <Suspense fallback={null}>
            <App />
        </Suspense>
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
