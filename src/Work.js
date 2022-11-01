import './css/Work.css'

import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Work() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({ 
                defaults: {
                    duration: 0.3,
                    ease: 'power4.out',
                    stagger: {
                        amount: 0.1,
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
                trigger: document.querySelector('.work-page-section'),
                start: 'top top+=1',
                end: 'bottom bottom-=1',
                animation: tl,
                toggleActions: 'play reset play reset',
            });
        });
        return () => ctx.revert();
    }, []);
    return (
        <>
            <div className='work-content-container'>
                <div className='work-description'>
                    <div className='work-heading-line'>
                        <span>This is some of my work.</span>
                    </div>
                    <div className='work-line'>
                        <span>I post about my daily life and stuff I find interesting.</span>
                    </div>
                </div>
            </div>
        </>
    );
}