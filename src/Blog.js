import './css/Blog.css'

import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Blog() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({ 
                defaults: {
                    duration: 0.2,
                    ease: 'power4.out',
                    stagger: {
                        amount: 0.075,
                    },
                }
            });
            tl.from('.blog-heading-line span', {
                opacity: 0,
            }).from('.blog-line span', {
                opacity: 0,
            }, '<').from('.blog-heading-line span', {
                skewY: 12,
                y: -200,
            }).from('.blog-line span', {
                skewY: 10,
                y: -100,
            });
            ScrollTrigger.create({
                trigger: ref.current,
                // start: 'top top+=1',
                // end: 'bottom bottom+=10',
                start: 'top center',
                end: 'bottom top',
                animation: tl,
                toggleActions: 'play reset play reset',
            });
        });
        return () => ctx.revert();
    }, []);
    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         // const tl = gsap.timeline();
    //         // tl.from(ref.current, {
    //         //     xPercent: 100,
    //         //     duration: 1,
    //         //     scrollTrigger: {
    //         //         trigger: document.querySelector('#about-section'),
    //         //         start: 'top 90%',
    //         //         end: 'bottom top',
    //         //         animation: tl,
    //         //         toggleActions: 'play reset play reset',
    //         //         markers: true,
    //         //     }
    //         // })
    //         gsap.from(ref.current, {
    //             xPercent: 100,
    //             scrollTrigger: {
    //                 trigger: document.querySelector('#blog-section'),
    //                 start: 'top bottom',
    //                 end: 'top 33%',
    //                 markers: true,
    //                 toggleActions: 'play reset play reset',
    //                 scrub: 1,
    //             }
    //         })
    //     });
    //     return () => ctx.revert();
    // }, []);
    return (
        <>
            <div ref={ref} className='blog-content-container'>
                <div className='blog-description'>
                    <div className='blog-heading-line'>
                        <span>This is my blog.</span>
                    </div>
                    <div className='blog-line'>
                        <span>Not yet ready</span>
                    </div>
                </div>
            </div>
        </>
    );
}