import './css/Pointer.css';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Pointer() {
    const ref = useRef();
    const [cursorPosition, setCursorPosition] = useState([0, 0]);
    document.addEventListener('mousemove', (e) => {
        setCursorPosition([e.pageX, e.pageY]);
    });
    document.addEventListener('mousedown', (e) => {
        ref.current.style.backgroundColor = '#fff44f';
    });
    document.addEventListener('mouseup',(e) => {
        ref.current.style.backgroundColor = '#6495ed';
    });
    useEffect(() => {
        gsap.to(ref.current, {
            x: cursorPosition[0],
            y: cursorPosition[1],
            duration: 0.33,
        });
    }, [cursorPosition]);

    useEffect(() => {

    }, [])
    // function warp(time) {
    //     if (time % 97 < 1) {
    //         gsap.to(ref.current, {
    //             duration: 1,
    //             borderTopLeftRadius: `${50 * (Math.random() + 1)}%`,
    //             borderTopRightRadius: `${50 * (Math.random() + 1)}%`,
    //             borderBottomLeftRadius: `${50 * (Math.random() + 1)}%`,
    //             borderBottomRightRadius: `${50 * (Math.random() + 1)}%`,
    //             width: `${3 * (1 + (Math.random() * 0.5))}vw`,
    //             height: `${3 * (1 + (Math.random() * 0.5))}vw`,
    //         });
    //     } 
    //     requestAnimationFrame(warp);
    // }

    return (
        <div ref={ref} className='pointer'>
        </div>
    );
}