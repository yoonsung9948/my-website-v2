import './css/Work.css'

import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';


function cardClick(card) {
    card.style.width = '60vw';
    card.style.height = '60vh';
}
export default function Work() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const cardRef1 = useRef();

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
            tl.from('.work-heading-line span', {
                opacity: 0,
            }).from('.work-line span', {
                opacity: 0,
            }, '<').from('.work-heading-line span', {
                skewY: 12,
                y: -200,
            }).from('.work-line span', {
                skewY: 10,
                y: -100,
            });
            ScrollTrigger.create({
                trigger: ref.current,
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
    //                 trigger: document.querySelector('#work-section'),
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
    // cards.forEach((card) => {
    //     card.addEventListener('click', () => {
    //         cardClick(card);
    //     })
    // })

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = document.querySelectorAll('.work-card');
            cards.forEach((card) => {
                gsap.from(card, {
                    scale: 0,
                    duration: 0.3,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: 'top center',
                        end: 'bottom top',
                        toggleActions: 'play reset play reset',
                    }
                });
            })

        });
        return () => ctx.revert();
    }, []);
    // function cardClick(card) {
    //     console.log('clikced ', card);
    //     card.style.width = '80vw';
    //     card.style.width = '80vh';
    // }

    useEffect(() => {
        const cards = document.querySelectorAll('.work-card');
        cards.forEach(card => {
            card.addEventListener('click', card => cardClick(card));
        })
    }, []);
    return (
        <>
            <div ref={ref} className='work-content-container'>
                <div className='work-description'>
                    <div className='work-heading-line'>
                        <span>This is some of my work.</span>
                    </div>
                    <div className='work-line'>
                        <span>404</span>
                    </div>
                    <div className='work-cards-container'>
                        <div ref={cardRef1} className='work-card' ></div>
                        <div className='work-card'></div>
                        <div className='work-card'></div>
                        <div className='work-card'></div>
                    </div>
                </div>
            </div>
        </>
    );
}