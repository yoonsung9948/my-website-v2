import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './css/About.css';

export default function About() {
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
            tl.from('.heading-line span', {
                opacity: 0,
            }).from('.line span', {
                opacity: 0,
            }, '<').from('.heading-line span', {
                skewY: 12,
                y: -200,
            }).from('.line span', {
                skewY: 10,
                y: -100,
            }).from('ul li', {
                listStyle: 'none',
            }, '<');
            ScrollTrigger.create({
                trigger: document.querySelector('.about-page-section'),
                start: 'top top+=1',
                end: 'bottom bottom-=1',
                animation: tl,
                toggleActions: 'play reset play reset',
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="content-container">
            <div className="introduction">
                <div className="heading-line" id="intro-heading-line">
                    <span id="intro-heading">A little bit about myself..</span>
                </div>
                <div className="line">
                    <span>
                        Hey, it's a pleasure to meet you! Welcome to my world!<br />
                    </span>
                </div>
                <div className="line">
                    <span>
                        I'm a student at the University of California, Berkeley.
                        {/* I'm a Computer Science major and currently getting to know my interests in the field.
                        As of now, I'm interested in blockchain and machiine learning!<br />
                        I'm really passionate about weight lifting and ... */}
                    </span>
                </div>

            </div>
            <div className="coursework">
                <div className="heading-line" id="coursework-heading-line">
                    <span id="coursework-heading">Coursework</span>
                </div>
                <ul>
                    <li>
                        <div className="line">
                            <span>CS162: Operating Systems and Systems Programming</span>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <span>CS170: Efficient Algorithms and Intractable Programs</span>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <span>CS188: Introduction to Artificial Intelligence</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
  }