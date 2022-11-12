import './css/Contacts.css'

import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Contacts() {
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
            tl.from('.contacts-heading-line span', {
                opacity: 0,
            }).from('.contacts-line span', {
                opacity: 0,
            }, '<').from('.contacts-heading-line span', {
                skewY: 12,
                y: -200,
            }).from('.contacts-line span', {
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
    //                 trigger: document.querySelector('#contacts-section'),
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
        <div ref={ref} style={{position: 'relative', height: '100%'}}>
            <div className='contacts-content-container'>
                <div className='contacts-description'>
                    <div className='contacts-heading-line'>
                        <span>This is my contacts.</span>
                    </div>
                    <div className='contacts-line'>
                        <span>none</span>
                    </div>
                </div>
            </div>
        </div>
    );
}