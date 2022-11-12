// import { useLoader, useThree, useFrame } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

// import * as THREE from 'three';

// const MODEL_URL = '/models/myWorld_v15.glb';

// function Car(props) {
//     const clips = props.animations;
//     const mixer = props.mixer;

//     return (
//         <>
//         </>
//     );
// }

// export default function Scene() {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.registerPlugin(ScrollToPlugin);
//     const gltf = useLoader(GLTFLoader, MODEL_URL, (loader) => {
//         const dracoLoader = new DRACOLoader();
//         dracoLoader.setDecoderPath('/draco/');
//         loader.setDRACOLoader(dracoLoader);
//     });
//     const state = useThree();
//     const scene = useRef();


//     //mesh animations
//     const clips = gltf.animations;
//     const mixer = new THREE.AnimationMixer(gltf.scene);

//     // const animations = [
//     //     'Empty.006',
//     //     'car_tail_lights',
//     //     'tire_animation_1',
//     //     'tire_animation_2',
//     //     'tire_animation_3',
//     //     'tire_animation_4',
//     // ];
//     // animations.forEach((animation) => {
//     //     const clip = THREE.AnimationClip.findByName(clips, animation);
//     //     if (clip) {
//     //         console.log(clip.name);
//     //         const action = mixer.clipAction(clip);
//     //         action.play();
//     //     }
//     // });
//     let clip1Action, section1Clip, section2Clip, section3Clip, section4Clip;
//     clips.forEach((clip) => {
//         const action = mixer.clipAction(clip);
//         action.play();
//         if (clip.name === 'Empty.006') {
//             clip1Action = action;
//             action.stop();
//             // section1Clip = THREE.AnimationUtils.subclip(clip, 'section1Clip', 0, 60, 60);
//             // section2Clip = THREE.AnimationUtils.subclip(clip, 'section2Clip', 60, 120, 60);
//             // section3Clip = THREE.AnimationUtils.subclip(clip, 'section3Clip', 120, 180, 60);
//             // section4Clip = THREE.AnimationUtils.subclip(clip, 'section4Clip', 180, 240, 60);  
//         }
//     });
//     const subclips = [
//         section1Clip,
//         section2Clip,
//         section3Clip,
//         section4Clip,
//     ];
//     let section1Action, section2Action, section3Action, section4Action;
//     const actions = [
//         section1Action,
//         section2Action,
//         section3Action,
//         section4Action,
//     ];
//     // subclips.forEach((clip, i) => {
//     //     actions[i] = mixer.clipAction(clip);
//     // });


//     // actions.forEach((action) => {
//     //     action.play();
//     //     action.paused = true;
//     //     action.reset();
//     //     action.setLoop(THREE.LoopOnce);

//     // })

//     useFrame((state, delta) => {
//         mixer.update(delta);
//     });
//     document.addEventListener('keypress', (e) => {
//         if (e.key === 'Space') {
//             clip1Action.play();
//         } else if (e.key === 'Enter') {
//             clip1Action.stop();
//         }
//     });

//     const sections = document.querySelectorAll('section');
//     const scrolling = {
//         enabled: true,
//         events: "scroll,wheel,touchmove,pointermove".split(","),
//         prevent: e => e.preventDefault(),
//         disable() {
//             if (scrolling.enabled) {
//                 scrolling.enabled = false;
//                 window.addEventListener('scroll', gsap.ticker.tick, {passive: true});
//                 scrolling.events.forEach((e, i) => {
//                     (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false});
//                 });
//             }
//         },
//         enable() {
//             if (!scrolling.enabled) {
//                 scrolling.enabled = true;
//                 window.removeEventListener('scroll', gsap.ticker.tick);
//                 scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
//             }
//         }
//     }

//     function goToSection(section, anim) {
//         if (scrolling.enabled) {
//             scrolling.disable();
//             gsap.to(window, {
//                 scrollTo: {y: section, autoKill: false},
//                 onComplete: scrolling.enable,
//                 duration: 1,
//             })
//         }
//         anim && anim.restart();
//     }
//     const cameraAnimation = [
//         {},
//         {
//             x: 0,
//             y: 6,
//             z: 6,
//             duration: 1,
//             paused: true,
//             onComplete: () => {
//                 // section1Action.paused = false;
//                 // section1Action.paused = false;
//                 // console.log(section1Action);
//                 // clip1Action.play();
//             },
//         },
//         {
//             x: -10,
//             y: 0,
//             z: 13,
//             duration: 1,
//             paused: true,
//         },
//         {},
//         {
//             x: 0,
//             y: -6,
//             z: 6,
//             duration: 1,
//             paused: true,
//         }
//     ]
//     const reversedAnimation = [
//         {},
//         {
//             x: 0,
//             y: 0,
//             z: 13,
//             duration: 1,
//             paused: true,
            
//         },
//         {
//             x: 0,
//             y: 6,
//             z: 6,
//             duration: 1,
//             paused: true,
//         },

//         {},
//         {
//             x: -10,
//             y: 0,
//             z: 13,
//             duration: 1,
//             paused: true,
//         },
//         {},        

//     ]

//     useEffect(() => {
//         let ctx = gsap.context(() => {
//             gsap.to(state.camera.position, {
//                 x: 0,
//                 y: 0,
//                 z: 13,
//                 delay: 1,
//                 duration: 1.5,
//                 ease: 'elastic',
//                 onStart: () => {
//                     scrolling.disable();
//                 },
//                 onComplete: () => {
//                     scrolling.enable();
//                     sections.forEach((section, i) => {
//                         const cameraMovement = gsap.to(state.camera.position, cameraAnimation[i]);
//                         const reversedMovement = gsap.to(state.camera.position, reversedAnimation[i+1]);

//                         ScrollTrigger.create({
//                             trigger: section,
//                             start: 'top bottom-=1',
//                             end: 'bottom top+=1',
//                             onEnter: () => {
//                                 goToSection(section, cameraMovement);
//                             },
//                             onEnterBack: () => goToSection(section, reversedMovement),                            
//                         });
//                     });
//                 },
                
//             });
//         }, scene);
//         return () => ctx.revert();
//     }, []);

//     // const upArrow = document.querySelector('#up-arrow');
//     // const downArrow = document.querySelector('#down-arrow');
//     // upArrow.addEventListener('click', () => {
//     //     goToSection(
//     //         document.querySelector('.landing-page-section'), 
//     //         gsap.to(state.camera.position, {})
//     //     );
//     // });
//     // downArrow.addEventListener('click', () => {
//     //     const nextSectionIndex = Math.round(window.scrollY / window.innerHeight) + 1;
//     //     goToSection(
//     //         sections[nextSectionIndex],
//     //         gsap.to(state.camera.position, cameraAnimation[nextSectionIndex])
//     //     );
//     // })
//     // const arrows = document.querySelectorAll('.nav-container img');
//     // arrows.forEach((element, i) => {
//     //     element.addEventListener('click', () => {
//     //         let nextIndex;
//     //         i === 0 ? nextIndex = 
//     //         goToSection(
                
//     //         );
//     //     })
//     // });
//     return (
//         <primitive object={gltf.scene} />
//     );
// }
