import './css/LoadingPage.css';
import * as THREE from 'three';
import { useRef } from 'react';

export default function LoadingPage() {
    const progressBarRef = useRef();
    const progressBarContainerRef = useRef();
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
        const progress = (itemsLoaded / itemsTotal) * 100;
        progressBarRef.current.style.width = progress + '%';
    };
    THREE.DefaultLoadingManager.onLoad = () => {
        setTimeout(() => {
            progressBarContainerRef.current.style.display = 'none';
        }, 1000);
    }
    return (
        <div id={'progress-bar-container'} ref={progressBarContainerRef}>
            <div id={'progress-bar'}>
            <div id={'fill'} ref={progressBarRef}></div>
            </div>
        </div>
    );
}