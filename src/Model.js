import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF, useAnimations } from "@react-three/drei";
// import { EffectComposer, Outline } from '@react-three/postprocessing'
import { useThree } from "@react-three/fiber";


import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import gsap from "gsap";

// import { RenderPass } from 'three/addons/postprocessing/RenderPass';
// import { OutlinePass } from 'three/addons/postprocessing/OutlinePass';
// import { EffectComposer } from 'three/addons/postprocessing/EffectComposer';
import * as THREE from 'three';
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



const MODEL_URL = './models/2-2.glb';
function TextContainer({ children, ...props }) {
    const [occluded, occlude] = useState();
  
    return (
        <Html
            transform
            occlude
            onOcclude={occlude}
            style={{
                transition: 'all 0.2s',
                opacity: 1,
                transform: `scale(${occluded ? 0.25 : 1})`,
            }}
        {...props}>
            {children}
        </Html>
    );
  }

function showPage(page) {
    gsap.to(page, {
        x: 0,
        y: 10,
        z: 0,
        opacity: 1,
        delay: 1,
        duration: 1.5,
    });
}
function hidePage(page) {
    gsap.to(page, {
        opacity: 0,
        scale: 0.25,
        duration: 0.5,
    });
}

export default function Model(props) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    const group = useRef();
    const gltf = useGLTF(MODEL_URL);
    const { nodes, materials, animations } = gltf;
    const { ref, mixer, names, actions, clips } = useAnimations(animations, group);
    const [ animationTime, setAnimationTime ] = useState(0);
    const [ paused, pause ] = useState(true);
    const clock = new THREE.Clock();
    const state = useThree();

    // const chosenNames = [
    //     'global-objectAction',
    //     'Empty.006',
    // ];
    // const earthClip = clips[0];
    // const carClip = clips[3];
    // const earthSubclips = {
    //     about: THREE.AnimationUtils.subclip(earthClip, 'about1', 0, 60),
    //     work: THREE.AnimationUtils.subclip(earthClip, 'work1', 60, 120),
    //     blog: THREE.AnimationUtils.subclip(earthClip, 'blog1', 120, 180),
    //     contacts: THREE.AnimationUtils.subclip(earthClip, 'contacts1', 180, 240),
    // };
    // const carSubclips = {
    //     about: THREE.AnimationUtils.subclip(carClip, 'about2', 0, 60),
    //     work: THREE.AnimationUtils.subclip(carClip, 'work2', 60, 120),
    //     blog: THREE.AnimationUtils.subclip(carClip, 'blog2', 120, 180),
    //     contacts: THREE.AnimationUtils.subclip(carClip, 'contacts2', 180, 240),
    // };
    // console.log(earthSubclips);
    // console.log(carSubclips)
    // let earthSubclipActions, carSubclipActions;
    // if (mixer.getRoot() !== undefined) {
    //     console.log('hello');
    //     earthSubclipActions = [
    //         mixer.clipAction(earthSubclips.about),
    //         mixer.clipAction(earthSubclips.work),
    //         mixer.clipAction(earthSubclips.blog),
    //         mixer.clipAction(earthSubclips.contacts),
    //     ];
    //     carSubclipActions = [
    //         mixer.clipAction(carSubclips.about),
    //         mixer.clipAction(carSubclips.work),
    //         mixer.clipAction(carSubclips.blog),
    //         mixer.clipAction(carSubclips.contacts),
    //     ];
    //     earthSubclipActions.forEach((action) => {
    //         action.play();
    //         action.paused = true;
    //     });
    //     carSubclipActions.forEach((action) => {
    //         action.play();
    //         action.paused = true;
    //     });
    // }
    // console.log(mixer.getRoot());
    // console.log(earthSubclipActions);
    // console.log(carSubclipActions);
    const myNames = [
        'global-objectAction',
    ]
    const earthAction = actions['global-objectAction'];
    const carAction = actions['Empty.006'];
    const tireActions = [
        actions['tire_animation_1'],
        actions['tire_animation_2'],
        actions['tire_animation_3'],
        actions['tire_animation_4'],
    ];
    const myActions = [
        earthAction,
        carAction,
        tireActions,
    ];
    // document.addEventListener('keydown', (e) => {
    //     if (e.code === 'Space') {
    //         pause(!paused);
    //     } else if (e.code === 'KeyP') {
    //         console.log(state.camera.position);
    //     } else if (e.code === 'KeyR') {
    //         names.forEach((name) => {
    //             const action = actions[name];
    //             action.reset();
    //             paused ? action.paused = true : action.paused = false;
    //         });
    //     } else if (e.code === 'KeyS') {
    //         earthAction.paused = true;
    //         carAction.paused = true;
    //         tireActions.forEach((action) => {
    //             action.paused = true;
    //         });
    //     } else if (e.code === 'KeyD') {
    //         earthAction.paused = false;
    //         carAction.paused = false;
    //         tireActions.forEach((action) => {
    //             action.paused = false;
    //         });
    //     }
    // });
    useEffect(() => {
        names.forEach((name) => {
            actions[name].play();
            if (myNames.includes(name)) {
                actions[name].pause = true;
            }
        })
    }, []);
    useEffect(() => {
        myNames.forEach((name) => {
            paused ? actions[name].paused = true : actions[name].paused = false;
        })
    }, [paused])
    
    // const sections = document.querySelectorAll('section');
    // const scrolling = {
    //     enabled: true,
    //     events: "scroll,wheel,touchmove,pointermove".split(","),
    //     prevent: e => e.preventDefault(),
    //     disable() {
    //         if (scrolling.enabled) {
    //             scrolling.enabled = false;
    //             window.addEventListener('scroll', gsap.ticker.tick, {passive: true});
    //             scrolling.events.forEach((e, i) => {
    //                 (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false});
    //             });
    //         }
    //     },
    //     enable() {
    //         if (!scrolling.enabled) {
    //             scrolling.enabled = true;
    //             window.removeEventListener('scroll', gsap.ticker.tick);
    //             scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
    //         }
    //     }
    // }
    
    // function goToSection(section, anim) {
    //     if (scrolling.enabled) {
    //         scrolling.disable();
    //         gsap.to(window, {
    //             scrollTo: {y: section, autoKill: false},
    //             duration: 1,
    //         })
    //         pause(false);
    //         setTimeout(() => {
    //             pause(true);
    //             scrolling.enable();
    //         }, 2500);
    //     }
    //     anim && anim.restart();
    // }
    // const pages = [
    //     '#about',
    //     '#work',
    //     '#blog',
    //     '#contacts',
    // ];
    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.to(state.camera.position, {
    //             x: 0,
    //             y: 0,
    //             z: 13,
    //             delay: 1,
    //             duration: 1.5,
    //             ease: 'elastic',
    //             onStart: () => {
    //                 scrolling.disable();
    //             },
    //             onComplete: () => {
    //                 scrolling.enable();
    //                 sections.forEach((section, i) => {
    //                     // const cameraMovement = gsap.to(state.camera.position, cameraAnimation[i]);
    //                     // const reversedMovement = gsap.to(state.camera.position, reversedAnimation[i+1]);

    //                     ScrollTrigger.create({
    //                         trigger: section,
    //                         start: 'top bottom-=1',
    //                         end: 'bottom top+=1',
    //                         onEnter: () => {
    //                             showPage();
    //                             if (i > 0) {
    //                                 goToSection(section);
    //                             } else {
    //                                 gsap.to(state.camera.position, {
    //                                     x: 0,
    //                                     y: 4.5,
    //                                     z: 6,
    //                                 }).to(state.camera.rotationX, {
    //                                     x: 0,
    //                                     y: -3,
    //                                     z: 0,
    //                                 });
    //                             }
    //                         },
    //                         onEnterBack: () => {
    //                             goToSection(section);
    //                         },
    //                         onLeave: () => {
    //                             hidePage(pages[i]);
    //                         },
    //                     });
    //                 });
    //             },
                
    //         });
    //     }, gltf.scene);
    //     return () => ctx.revert();
    // }, []);
    const earth = gltf.scene.getObjectByName('global-object');

    useEffect(() => {
        gsap.to(state.camera.position, {
            x: 0,
            y: 0,
            z: 15,
            delay: 1,
            duration: 1.5,
            ease: 'elastic',
            onComplete: () => {
                gsap.to(earth.rotation,
                    {
                        x: Math.PI * -2,
                        scrollTrigger: {
                            trigger: '.sections',
                            start: 'top top+=50%',
                            end: 'bottom bottom',
                            scrub: 1,
                        },
                    });
            },
        });

    }, []);
    useEffect(() => {
        console.log('hello');
        gsap.to(earth.position, 
            {
                x: -11.5,
                y: 0,
                z: 0,
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top top-=1',
                    end: 'bottom center',
                    scrub: 1,
            }
        });
        
    }, []);

    // console.log(gltf.scene);
    // const house = gltf.scene.getObjectByName('japanese_house');
    // const library = gltf.scene.getObjectByName('library');

    // const composer = new EffectComposer(state.gl);
    // const renderPass = new RenderPass(state.scene, state.camera);
    // const outlinePass = new OutlinePass( new THREE.Vector2(window.innerWidth, window.innerHeight), state.scene, state.camera);
    // const raycaster = new THREE.Raycaster();
    // const mouse = new THREE.Vector2();
    // let selectedObjects;
    // useEffect(() => {
    //     composer.addPass(renderPass);
    //     composer.addPass(outlinePass);
    //     outlinePass.edgeStrength = 3;
    //     outlinePass.edgeGlow = 0;
    //     outlinePass.edgeThickness = 1;
    //     outlinePass.pulsePeriod = 0.5;
    //     outlinePass.usePatternTexture = false;
    //     outlinePass.visibleEdgeColor = '#ffffff';
    //     outlinePass.hiddenEdgeColor = '#190a05';
    //     outlinePass.renderToScreen = true;
    //     window.addEventListener('resize', () => {composer.setSize( window.innerWidth, window.innerHeight );});
    // }, []);
    // useFrame(( state, delta, xrFrame) => {
    //     composer.render();
    // });


    // function onPointerMove( event ) {

    //     if ( event.isPrimary === false ) return;

    //     mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    //     mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    //     checkIntersection();

    // }
    // function checkIntersection() {

    //     raycaster.setFromCamera( mouse, state.camera );

    //     const intersects = raycaster.intersectObject( state.scene, true );
    //     if ( intersects.length > 0 ) {
    //         const selectedObject = intersects[ 0 ].object;
    //         addSelectedObject( selectedObject );
    //         outlinePass.selectedObjects = selectedObjects;
    //         console.log(outlinePass.selectedObjects);

    //     } else {

    //         outlinePass.selectedObjects = [];

    //     }

    // }
    // function addSelectedObject( object ) {
    //     selectedObjects = [];
    //     selectedObjects.push( object );

    // }

    // useEffect(() => {
    //     state.gl.domElement.addEventListener('pointermove', onPointerMove);
    // }, [])


    return (
        <>
        <primitive object={gltf.scene} ref={group}>
                {/* <TextContainer position={[0, 10, 0]}>
                    <About />
                </TextContainer>
                <TextContainer position={[0, 0, -10]} >
                    <Work />
                </TextContainer>
                <TextContainer position={[0, -10, 0]} >
                    <Blog />
                </TextContainer>
                <TextContainer position={[0, 0, 10]}>
                    <Contacts />
                </TextContainer> */}
                {/* <Html
                    wrappingClass='about'
                    transform
                    occlude
                    // onOcclude={occlude}
                    style={{
                        transition: 'all 0.2s',
                        opacity: 1,
                        // transform: `scale(${occluded ? 0.25 : 1})`,
                    }}
                    position={[0, 0, -10]}
                >
                    <About />
                </Html> */}
            </primitive>
            
            {/* <EffectComposer>
                <Outline 
                    selection={group}
                    selectionLayer={1}
                />
            </EffectComposer> */}
        </>
    );
}

