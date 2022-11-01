import './css/Blog.css'

import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Blog() {
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
                trigger: document.querySelector('.blog-page-section'),
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
                    <div className='blog-content-container'>
                        <div className='blog-description'>
                            <div className='blog-heading-line'>
                                <span>This is my blog.</span>
                            </div>
                            <div className='blog-line'>
                                <span>I post about my daily life and stuff I find interesting.</span>
                            </div>
                        </div>
                    </div>
        </>
    );
}