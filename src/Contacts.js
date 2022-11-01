import './css/Contacts.css'

import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Contacts() {
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
                trigger: document.querySelector('.contacts-page-section'),
                start: 'top top+=1',
                end: 'bottom bottom-=1',
                animation: tl,
                toggleActions: 'play reset play reset',
            });
        });
        return () => ctx.revert();
    }, []);
    return (
        <div style={{position: 'relative', height: '100%'}}>
            <div className='contacts-content-container'>
                <div className='contacts-description'>
                    <div className='contacts-heading-line'>
                        <span>This is my contacts.</span>
                    </div>
                    <div className='contacts-line'>
                        <span>I post about my daily life and stuff I find interesting.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}