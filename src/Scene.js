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


/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/myWorld_v15.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="car001"
          position={[0.1, 3.63, 1.69]}
          rotation={[0.72, -1.31, 0.24]}
          scale={[0.01, 0.04, 0.08]}
        />
        <group
          name="Cylinder003"
          position={[0, 3.86, -0.07]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.12, 0.04, 0.12]}
        />
        <group name="BezierCircle" rotation={[0, 0, -Math.PI / 2]} scale={4.08}>
          <group
            name="Empty006"
            position={[-0.83, 0.05, 0.51]}
            rotation={[1.35, 0.09, 1.03]}
            scale={0.24}
          >
            <group
              name="car_tail_lights"
              position={[0.18, 0.07, 0.03]}
              rotation={[-0.01, 0, -0.14]}
              scale={[0.01, 0.04, 0.08]}
            >
              <mesh
                name="Cube083"
                castShadow
                receiveShadow
                geometry={nodes.Cube083.geometry}
                material={materials["car-backlight"]}
              />
              <mesh
                name="Cube083_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube083_1.geometry}
                material={materials["car-turnsignal"]}
              />
            </group>
            <group
              name="car_tire1"
              position={[-0.44, 0.11, 0.25]}
              rotation={[1.56, 0, 3.13]}
              scale={[0.13, 0.04, 0.13]}
            >
              <mesh
                name="Cylinder020"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder020.geometry}
                material={materials.tires}
              />
              <mesh
                name="Cylinder020_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder020_1.geometry}
                material={materials["tires-wheel"]}
              />
            </group>
            <group
              name="car_tire1002"
              position={[0.45, 0.11, -0.22]}
              rotation={[1.56, 0, 3.13]}
              scale={[0.13, 0.04, 0.13]}
            >
              <mesh
                name="Cylinder022"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder022.geometry}
                material={materials.tires}
              />
              <mesh
                name="Cylinder022_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder022_1.geometry}
                material={materials["tires-wheel"]}
              />
            </group>
            <group
              name="car_tire1003"
              position={[0.46, 0.11, 0.23]}
              rotation={[1.56, 0, 3.13]}
              scale={[0.13, 0.04, 0.13]}
            >
              <mesh
                name="Cylinder023"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder023.geometry}
                material={materials.tires}
              />
              <mesh
                name="Cylinder023_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder023_1.geometry}
                material={materials["tires-wheel"]}
              />
            </group>
            <group
              name="car"
              position={[0.18, 0.03, 0.02]}
              rotation={[-0.01, 0, -0.11]}
              scale={[0.01, 0.04, 0.08]}
            >
              <mesh
                name="Cube002_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_1.geometry}
                material={materials.cloud}
              />
              <mesh
                name="Cube002_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_2.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                name="Cube002_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_3.geometry}
                material={materials["lib-window-glass"]}
              />
              <mesh
                name="Cube002_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_4.geometry}
                material={materials.tires}
              />
              <mesh
                name="Cube002_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_5.geometry}
                material={materials["car-backlight"]}
              />
              <mesh
                name="Cube002_6"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_6.geometry}
                material={materials["lib-green-accent"]}
              />
              <mesh
                name="Cube002_7"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_7.geometry}
                material={materials["suitecase-green"]}
              />
              <mesh
                name="Cube002_8"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_8.geometry}
                material={materials["suitcase-purple"]}
              />
              <mesh
                name="Cube002_9"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_9.geometry}
                material={materials["bridge-gaurd"]}
              />
            </group>
            <group
              name="car_tire1001"
              position={[-0.44, 0.11, -0.23]}
              rotation={[1.56, 0, 3.13]}
              scale={[0.13, 0.04, 0.13]}
            >
              <mesh
                name="Cylinder021"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder021.geometry}
                material={materials.tires}
              />
              <mesh
                name="Cylinder021_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder021_1.geometry}
                material={materials["tires-wheel"]}
              />
            </group>
          </group>
        </group>
        <group name="Armature" rotation={[-0.97, -1.1, -1.78]} scale={0.58}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
        </group>
        <group
          name="Empty001"
          position={[3.19, 0.7, 4.59]}
          rotation={[-0.84, -0.88, -2.21]}
        >
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={nodes.Circle001.material}
            position={[0, -2.14, -0.11]}
            scale={[0.08, 0.09, 0.08]}
          />
          <group name="Sphere005" rotation={[0, 0, -0.7]} scale={0.07}>
            <mesh
              name="Sphere009"
              castShadow
              receiveShadow
              geometry={nodes.Sphere009.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Sphere009_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere009_1.geometry}
              material={materials["tree-apples"]}
            />
          </group>
        </group>
        <group
          name="Empty002"
          position={[2.35, -0.5, 5.04]}
          rotation={[-0.9, -0.92, -2.46]}
        >
          <mesh
            name="Circle002"
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
            position={[0, -2.14, -0.11]}
            scale={[0.08, 0.09, 0.08]}
          />
          <group name="Sphere001" rotation={[0, 0, 0.87]} scale={0.07}>
            <mesh
              name="Sphere002_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_1.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Sphere002_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_2.geometry}
              material={materials["tree-apples"]}
            />
          </group>
        </group>
        <group
          name="Empty003"
          position={[0.63, -0.46, 5.54]}
          rotation={[-1.26, -1.02, -2.87]}
        >
          <mesh
            name="Circle003"
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
            position={[0, -2.14, -0.11]}
            scale={[0.08, 0.09, 0.08]}
          />
          <group name="Sphere002" rotation={[0, 0, Math.PI / 9]} scale={0.07}>
            <mesh
              name="Sphere003_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere003_1.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Sphere003_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere003_2.geometry}
              material={materials["tree-apples"]}
            />
          </group>
        </group>
        <group
          name="Empty004"
          position={[1.89, -2.23, 4.83]}
          rotation={[-0.67, -0.86, -2.68]}
        >
          <mesh
            name="Circle004"
            castShadow
            receiveShadow
            geometry={nodes.Circle004.geometry}
            material={nodes.Circle004.material}
            position={[0, -2.14, -0.11]}
            scale={[0.08, 0.09, 0.08]}
          />
          <group name="Sphere003" rotation={[0, 0, -Math.PI / 6]} scale={0.07}>
            <mesh
              name="Sphere004_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere004_1.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Sphere004_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere004_2.geometry}
              material={materials["tree-apples"]}
            />
          </group>
        </group>
        <group
          name="Empty005"
          position={[1.78, 0.75, 5.31]}
          rotation={[-1.12, -1.06, -2.49]}
        >
          <mesh
            name="Circle005"
            castShadow
            receiveShadow
            geometry={nodes.Circle005.geometry}
            material={nodes.Circle005.material}
            position={[0, -2.14, -0.11]}
            scale={[0.08, 0.09, 0.08]}
          />
          <group name="Sphere004" scale={0.07}>
            <mesh
              name="Sphere010"
              castShadow
              receiveShadow
              geometry={nodes.Sphere010.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Sphere010_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere010_1.geometry}
              material={materials["tree-apples"]}
            />
          </group>
        </group>
        <group name="Cube002" rotation={[2.41, -0.46, 1.68]} scale={0.01}>
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.skin}
          />
          <mesh
            name="Cube004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials.hat}
          />
          <mesh
            name="Cube004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials["t-shirt"]}
          />
          <mesh
            name="Cube004_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_3.geometry}
            material={materials.pants}
          />
          <mesh
            name="Cube004_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_4.geometry}
            material={materials.shoes}
          />
        </group>
        <group name="earth_sphere" rotation={[2.36, 1.1, 2.01]} scale={0.07}>
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials["tree-trunk.001"]}
          />
          <mesh
            name="Plane004_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_1.geometry}
            material={materials["tree-leaves.001"]}
          />
          <mesh
            name="Plane004_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_2.geometry}
            material={materials.earth}
          />
          <mesh
            name="Plane004_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_3.geometry}
            material={materials.bridge}
          />
          <mesh
            name="Plane004_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_4.geometry}
            material={materials["bridge-gaurd"]}
          />
          <mesh
            name="Plane004_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_5.geometry}
            material={materials["street-yellow-line"]}
          />
          <mesh
            name="Plane004_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_6.geometry}
            material={materials["street-asphalt"]}
          />
          <group name="apple-tree" rotation={[-1.09, 0.19, -1.84]} scale={5.88}>
            <mesh
              name="Icosphere032"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere032.geometry}
              material={materials["suitecase-green"]}
            />
            <mesh
              name="Icosphere032_1"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere032_1.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Icosphere032_2"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere032_2.geometry}
              material={materials["tree-apples"]}
            />
          </group>
          <group
            name="apple-tree001"
            rotation={[1.83, 0.56, -0.95]}
            scale={5.05}
          >
            <mesh
              name="Icosphere003"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere003.geometry}
              material={materials["tree-leaves"]}
            />
            <mesh
              name="Icosphere003_1"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere003_1.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Icosphere003_2"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere003_2.geometry}
              material={materials["tree-apples"]}
            />
          </group>
          <group
            name="apple-tree002"
            rotation={[-0.22, -0.33, 0.34]}
            scale={5.88}
          >
            <mesh
              name="Icosphere004"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere004.geometry}
              material={materials["tree-leaves"]}
            />
            <mesh
              name="Icosphere004_1"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere004_1.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Icosphere004_2"
              castShadow
              receiveShadow
              geometry={nodes.Icosphere004_2.geometry}
              material={materials["tree-apples"]}
            />
          </group>
          <group
            name="bench001"
            rotation={[-3.1, -0.08, 0.4]}
            scale={[0.29, 0.13, 1.8]}
          >
            <mesh
              name="Cube005"
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
              material={materials["bench-metal"]}
            />
            <mesh
              name="Cube005_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube005_1.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Cube005_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube005_2.geometry}
              material={materials["bench-wood-mid"]}
            />
            <mesh
              name="Cube005_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube005_3.geometry}
              material={materials["bench-wood-dark"]}
            />
          </group>
          <group
            name="bench_empty"
            rotation={[-2.32, 0.32, -1.24]}
            scale={[0.22, 0.1, 1.41]}
          >
            <mesh
              name="Cube001"
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials["bench-metal"]}
            />
            <mesh
              name="Cube001_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube001_1.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Cube001_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube001_2.geometry}
              material={materials["bench-wood-mid"]}
            />
            <mesh
              name="Cube001_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube001_3.geometry}
              material={materials["bench-wood-dark"]}
            />
          </group>
          <group
            name="bench_empty001"
            rotation={[0.08, 0.08, 0.5]}
            scale={[0.22, 0.1, 1.41]}
          >
            <mesh
              name="Cube078"
              castShadow
              receiveShadow
              geometry={nodes.Cube078.geometry}
              material={materials["bench-metal"]}
            />
            <mesh
              name="Cube078_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube078_1.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Cube078_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube078_2.geometry}
              material={materials["bench-wood-mid"]}
            />
            <mesh
              name="Cube078_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube078_3.geometry}
              material={materials["bench-wood-dark"]}
            />
          </group>
          <group
            name="bridge2"
            rotation={[2.59, -0.3, 1.95]}
            scale={[4.69, 7, 8.91]}
          >
            <mesh
              name="Plane003"
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials.bridge}
            />
            <mesh
              name="Plane003_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane003_1.geometry}
              material={materials["street-asphalt"]}
            />
          </group>
          <mesh
            name="cloud1"
            castShadow
            receiveShadow
            geometry={nodes.cloud1.geometry}
            material={materials.cloud}
            rotation={[-1.59, -1.09, -2.39]}
            scale={4.96}
          />
          <mesh
            name="cloud2"
            castShadow
            receiveShadow
            geometry={nodes.cloud2.geometry}
            material={materials.cloud}
            position={[-3.47, -4.11, -2.64]}
            rotation={[-1.59, -1.09, -2.39]}
            scale={4.96}
          />
          <mesh
            name="cloud3"
            castShadow
            receiveShadow
            geometry={nodes.cloud3.geometry}
            material={materials.cloud}
            position={[-38.88, -12.4, -20.88]}
            rotation={[-1.51, -1.1, -1.59]}
            scale={3.74}
          />
          <mesh
            name="cloud4"
            castShadow
            receiveShadow
            geometry={nodes.cloud4.geometry}
            material={materials.cloud}
            position={[-23.62, 8.57, -22.26]}
            rotation={[-1.14, -0.07, -1.37]}
            scale={3.74}
          />
          <mesh
            name="cloud5"
            castShadow
            receiveShadow
            geometry={nodes.cloud5.geometry}
            material={materials.cloud}
            position={[-53.38, 47.64, 15.95]}
            rotation={[-1.51, -1.1, -1.59]}
            scale={3.74}
          />
          <mesh
            name="cloud6"
            castShadow
            receiveShadow
            geometry={nodes.cloud6.geometry}
            material={materials.cloud}
            position={[13.69, -28.98, 5.19]}
            rotation={[-1.59, -1.09, -2.39]}
            scale={4.96}
          />
          <group
            name="Cylinder"
            position={[-31.73, -9.55, -44.27]}
            rotation={[2.87, -0.55, -2.45]}
            scale={[0.63, 0.63, 1.55]}
          />
          <group
            name="Cylinder001"
            position={[-6.07, -31.38, -42.66]}
            rotation={[2.49, -0.19, -2.59]}
            scale={[0.63, 0.63, 1.55]}
          />
          <group
            name="Cylinder002"
            position={[-16.52, -27.64, -44.44]}
            rotation={[2.68, -0.41, -2.52]}
            scale={1.55}
          />
          <mesh
            name="Cylinder002_0"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_0.geometry}
            material={materials.japanbuilding13}
            rotation={[2.68, -0.41, -2.52]}
            scale={1.55}
          />
          <mesh
            name="Cylinder002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.hause_japan16}
            rotation={[2.68, -0.41, -2.52]}
            scale={1.55}
          />
          <mesh
            name="Cylinder002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.japanbuilding12}
            rotation={[2.68, -0.41, -2.52]}
            scale={1.55}
          />
          <mesh
            name="Cylinder_0"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_0.geometry}
            material={materials.japanbuilding13}
            rotation={[2.87, -0.55, -2.45]}
            scale={[0.63, 0.63, 1.55]}
          />
          <mesh
            name="Cylinder_0001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_0001.geometry}
            material={materials.japanbuilding13}
            rotation={[2.49, -0.19, -2.59]}
            scale={[0.63, 0.63, 1.55]}
          />
          <mesh
            name="Cylinder_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.hause_japan16}
            rotation={[2.87, -0.55, -2.45]}
            scale={[0.63, 0.63, 1.55]}
          />
          <mesh
            name="Cylinder_1001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1001.geometry}
            material={materials.hause_japan16}
            rotation={[2.49, -0.19, -2.59]}
            scale={[0.63, 0.63, 1.55]}
          />
          <mesh
            name="Cylinder_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.japanbuilding17}
            rotation={[2.87, -0.55, -2.45]}
            scale={[0.63, 0.63, 1.55]}
          />
          <mesh
            name="Cylinder_2001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2001.geometry}
            material={materials.japanbuilding17}
            rotation={[2.49, -0.19, -2.59]}
            scale={[0.63, 0.63, 1.55]}
          />
          <group
            name="Empty"
            position={[-3.47, -4.11, -2.64]}
            rotation={[-1.51, -1.08, -1.99]}
            scale={79.54}
          />
          <group
            name="fire"
            rotation={[-0.61, 0.89, -1.44]}
            scale={[0.05, 0.03, 0.04]}
          >
            <mesh
              name="Mesh077"
              castShadow
              receiveShadow
              geometry={nodes.Mesh077.geometry}
              material={materials["Material #54"]}
            />
            <mesh
              name="Mesh077_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh077_1.geometry}
              material={materials["dark tree trunk"]}
            />
            <mesh
              name="Mesh077_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh077_2.geometry}
              material={materials.rocks}
            />
          </group>
          <group
            name="hill-house"
            rotation={[-1.38, -0.91, -0.12]}
            scale={2.77}
          >
            <mesh
              name="Cube006"
              castShadow
              receiveShadow
              geometry={nodes.Cube006.geometry}
              material={materials["hill-house-walls"]}
            />
            <mesh
              name="Cube006_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube006_1.geometry}
              material={materials["hill-house-door"]}
            />
            <mesh
              name="Cube006_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube006_2.geometry}
              material={materials["hill-house-window"]}
            />
            <mesh
              name="Cube006_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube006_3.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Cube006_4"
              castShadow
              receiveShadow
              geometry={nodes.Cube006_4.geometry}
              material={materials["stop-sign"]}
            />
            <mesh
              name="Cube006_5"
              castShadow
              receiveShadow
              geometry={nodes.Cube006_5.geometry}
              material={materials["tires-wheel"]}
            />
            <mesh
              name="Cube006_6"
              castShadow
              receiveShadow
              geometry={nodes.Cube006_6.geometry}
              material={materials.tires}
            />
          </group>
          <group
            name="japanese_house"
            rotation={[-1.71, 1.15, -1.43]}
            scale={0.51}
          >
            <mesh
              name="Export"
              castShadow
              receiveShadow
              geometry={nodes.Export.geometry}
              material={materials.lambert4SG}
            />
            <mesh
              name="Export_1"
              castShadow
              receiveShadow
              geometry={nodes.Export_1.geometry}
              material={materials.lambert10SG}
            />
            <mesh
              name="Export_2"
              castShadow
              receiveShadow
              geometry={nodes.Export_2.geometry}
              material={materials.lambert6SG}
            />
            <mesh
              name="Export_3"
              castShadow
              receiveShadow
              geometry={nodes.Export_3.geometry}
              material={materials.lambert11SG}
            />
            <mesh
              name="Export_4"
              castShadow
              receiveShadow
              geometry={nodes.Export_4.geometry}
              material={materials.lambert7SG}
            />
            <mesh
              name="Export_5"
              castShadow
              receiveShadow
              geometry={nodes.Export_5.geometry}
              material={materials.lambert13SG}
            />
            <mesh
              name="Export_6"
              castShadow
              receiveShadow
              geometry={nodes.Export_6.geometry}
              material={materials.lambert8SG}
            />
            <mesh
              name="Export_7"
              castShadow
              receiveShadow
              geometry={nodes.Export_7.geometry}
              material={materials.lambert9SG}
            />
            <mesh
              name="Export_8"
              castShadow
              receiveShadow
              geometry={nodes.Export_8.geometry}
              material={materials.lambert2SG}
            />
          </group>
          <group
            name="japanese_temple_gates"
            position={[-26.66, -16.27, -43.34]}
            rotation={[2.68, -0.41, -2.52]}
            scale={1.55}
          />
          <group
            name="japanese_tree_1"
            position={[-40.39, -38.59, 7.93]}
            rotation={[2.55, -0.72, 0.16]}
            scale={5.39}
          />
          <group
            name="japanese_tree_2"
            position={[-54.69, -1.7, 7.56]}
            rotation={[-0.83, -0.8, 1.85]}
            scale={5.08}
          />
          <mesh
            name="JapanLantern"
            castShadow
            receiveShadow
            geometry={nodes.JapanLantern.geometry}
            material={materials.DefaultMaterial}
            rotation={[-1.46, 0.62, 1.63]}
            scale={0.25}
          />
          <group
            name="library"
            rotation={[-2.09, 0.43, -2.94]}
            scale={[15, 6.4, 3.86]}
          >
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials["lib-main"]}
            />
            <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={materials["lib-window-gaurd"]}
            />
            <mesh
              name="Plane_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane_2.geometry}
              material={materials["lib-window-glass"]}
            />
            <mesh
              name="Plane_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane_3.geometry}
              material={materials["lib-green-accent"]}
            />
            <mesh
              name="Plane_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane_4.geometry}
              material={materials["lib-roof"]}
            />
            <mesh
              name="Plane_5"
              castShadow
              receiveShadow
              geometry={nodes.Plane_5.geometry}
              material={materials.Asphalt}
            />
          </group>
          <mesh
            name="node-0"
            castShadow
            receiveShadow
            geometry={nodes["node-0"].geometry}
            material={materials["dog-white"]}
            rotation={[-3.05, -0.05, 0.41]}
            scale={0.04}
          />
          <mesh
            name="node-0001"
            castShadow
            receiveShadow
            geometry={nodes["node-0001"].geometry}
            material={materials["dog-black"]}
            rotation={[-3.01, -0.04, 0.41]}
            scale={0.04}
          />
          <group
            name="Root"
            position={[-40.39, -38.59, 7.93]}
            rotation={[2.55, -0.72, 0.16]}
            scale={5.39}
          />
          <group
            name="Root001"
            position={[-54.69, -1.7, 7.56]}
            rotation={[-0.83, -0.8, 1.85]}
            scale={5.08}
          />
          <group
            name="Root002"
            position={[-26.66, -16.27, -43.34]}
            rotation={[2.68, -0.41, -2.52]}
            scale={1.55}
          />
          <group
            name="stop-sign"
            rotation={[2.09, -0.55, 1.56]}
            scale={[1.15, 1.15, 1.44]}
          >
            <mesh
              name="Text"
              castShadow
              receiveShadow
              geometry={nodes.Text.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Text_1"
              castShadow
              receiveShadow
              geometry={nodes.Text_1.geometry}
              material={materials["stop-sign"]}
            />
            <mesh
              name="Text_2"
              castShadow
              receiveShadow
              geometry={nodes.Text_2.geometry}
              material={materials["stop-sign-metal"]}
            />
          </group>
          <group
            name="stop-sign001"
            position={[-29.25, -46.82, -11.61]}
            rotation={[-1.47, 0.97, -1.56]}
            scale={[1.15, 1.15, 1.44]}
          >
            <mesh
              name="Text001"
              castShadow
              receiveShadow
              geometry={nodes.Text001.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Text001_1"
              castShadow
              receiveShadow
              geometry={nodes.Text001_1.geometry}
              material={materials["stop-sign"]}
            />
            <mesh
              name="Text001_2"
              castShadow
              receiveShadow
              geometry={nodes.Text001_2.geometry}
              material={materials["stop-sign-metal"]}
            />
          </group>
          <group
            name="stop-sign002"
            rotation={[-1.11, -0.7, -1.36]}
            scale={[1.15, 1.15, 1.44]}
          >
            <mesh
              name="Text002"
              castShadow
              receiveShadow
              geometry={nodes.Text002.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Text002_1"
              castShadow
              receiveShadow
              geometry={nodes.Text002_1.geometry}
              material={materials["stop-sign"]}
            />
            <mesh
              name="Text002_2"
              castShadow
              receiveShadow
              geometry={nodes.Text002_2.geometry}
              material={materials["stop-sign-metal"]}
            />
          </group>
          <group
            name="stop-sign003"
            rotation={[-0.01, 0.94, -3.04]}
            scale={[1.15, 1.15, 1.44]}
          >
            <mesh
              name="Text003"
              castShadow
              receiveShadow
              geometry={nodes.Text003.geometry}
              material={materials.cloud}
            />
            <mesh
              name="Text003_1"
              castShadow
              receiveShadow
              geometry={nodes.Text003_1.geometry}
              material={materials["stop-sign"]}
            />
            <mesh
              name="Text003_2"
              castShadow
              receiveShadow
              geometry={nodes.Text003_2.geometry}
              material={materials["stop-sign-metal"]}
            />
          </group>
          <group
            name="tent-yellow"
            rotation={[-1.34, 0.45, -0.87]}
            scale={[4.68, 7.5, 4.68]}
          >
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials["tent-yellow"]}
            />
            <mesh
              name="Plane016_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_1.geometry}
              material={materials.bridge}
            />
            <mesh
              name="Plane016_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_2.geometry}
              material={materials.tires}
            />
          </group>
          <group
            name="tree"
            position={[-40.39, -38.59, 7.93]}
            rotation={[2.55, -0.72, 0.16]}
            scale={5.39}
          />
          <group
            name="tree001"
            position={[-54.69, -1.7, 7.56]}
            rotation={[-0.83, -0.8, 1.85]}
            scale={5.08}
          />
          <group
            name="tree_leaves000"
            position={[-41.95, -50.56, 3.52]}
            rotation={[2.55, -0.72, 0.16]}
            scale={2.04}
          />
          <mesh
            name="tree_leaves000_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves000_0.geometry}
            material={materials.leaves}
            rotation={[2.55, -0.72, 0.16]}
            scale={2.04}
          />
          <mesh
            name="tree_leaves000_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves000_0001.geometry}
            material={materials.leaves}
            rotation={[-0.83, -0.8, 1.85]}
            scale={1.92}
          />
          <group
            name="tree_leaves001"
            position={[-42.43, -47.67, 0.98]}
            rotation={[0.69, -0.86, 0]}
            scale={2.4}
          />
          <mesh
            name="tree_leaves001_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves001_0.geometry}
            material={materials.leaves}
            rotation={[0.69, -0.86, 0]}
            scale={2.4}
          />
          <mesh
            name="tree_leaves001_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves001_0001.geometry}
            material={materials.leaves}
            rotation={[0.91, -0.69, -1.71]}
            scale={2.26}
          />
          <group
            name="tree_leaves002"
            position={[-47.99, -51.17, 4.57]}
            rotation={[-0.33, -0.39, -0.91]}
            scale={2.4}
          />
          <mesh
            name="tree_leaves002_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves002_0.geometry}
            material={materials.leaves}
            rotation={[-0.33, -0.39, -0.91]}
            scale={2.4}
          />
          <mesh
            name="tree_leaves002_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves002_0001.geometry}
            material={materials.leaves}
            rotation={[1.15, 0.2, -1.92]}
            scale={2.26}
          />
          <group
            name="tree_leaves003"
            position={[-46.09, -46.12, 3.21]}
            rotation={[0.69, -0.86, 0]}
            scale={1.18}
          />
          <mesh
            name="tree_leaves003_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves003_0.geometry}
            material={materials.leaves}
            rotation={[0.69, -0.86, 0]}
            scale={1.18}
          />
          <mesh
            name="tree_leaves003_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves003_0001.geometry}
            material={materials.leaves}
            rotation={[0.91, -0.69, -1.71]}
            scale={1.11}
          />
          <group
            name="tree_leaves004"
            position={[-49.51, -39.73, 8.03]}
            rotation={[-0.17, -0.7, -1.16]}
            scale={1.18}
          />
          <mesh
            name="tree_leaves004_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves004_0.geometry}
            material={materials.leaves}
            rotation={[-0.17, -0.7, -1.16]}
            scale={1.18}
          />
          <mesh
            name="tree_leaves004_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves004_0001.geometry}
            material={materials.leaves}
            rotation={[0.96, -0.07, -2.24]}
            scale={1.11}
          />
          <group
            name="tree_leaves005"
            position={[-48.1, -40, 6.29]}
            rotation={[0.08, -0.75, -0.54]}
            scale={0.81}
          />
          <mesh
            name="tree_leaves005_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves005_0.geometry}
            material={materials.leaves}
            rotation={[0.08, -0.75, -0.54]}
            scale={0.81}
          />
          <mesh
            name="tree_leaves005_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves005_0001.geometry}
            material={materials.leaves}
            rotation={[0.99, -0.26, -1.77]}
            scale={0.77}
          />
          <group
            name="tree_leaves006"
            position={[-51.24, -44, 10.18]}
            rotation={[0.07, -0.44, -1.01]}
            scale={1.71}
          />
          <mesh
            name="tree_leaves006_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves006_0.geometry}
            material={materials.leaves}
            rotation={[0.07, -0.44, -1.01]}
            scale={1.71}
          />
          <mesh
            name="tree_leaves006_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves006_0001.geometry}
            material={materials.leaves}
            rotation={[1.28, -0.14, -2.17]}
            scale={1.61}
          />
          <group
            name="tree_leaves007"
            position={[-49.81, -51.84, 12]}
            rotation={[-0.81, -0.69, -0.55]}
            scale={1.32}
          />
          <mesh
            name="tree_leaves007_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves007_0.geometry}
            material={materials.leaves}
            rotation={[-0.81, -0.69, -0.55]}
            scale={1.32}
          />
          <mesh
            name="tree_leaves007_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves007_0001.geometry}
            material={materials.leaves}
            rotation={[0.64, 0.3, -1.17]}
            scale={1.24}
          />
          <group
            name="tree_leaves008"
            position={[-50.46, -49.64, 13.15]}
            rotation={[-2.21, -0.46, -1.16]}
            scale={0.81}
          />
          <mesh
            name="tree_leaves008_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves008_0.geometry}
            material={materials.leaves}
            rotation={[-2.21, -0.46, -1.16]}
            scale={0.81}
          />
          <mesh
            name="tree_leaves008_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves008_0001.geometry}
            material={materials.leaves}
            rotation={[-0.61, 0.43, -0.41]}
            scale={0.77}
          />
          <group
            name="tree_leaves009"
            position={[-51.43, -48.68, 9.44]}
            rotation={[-0.81, -0.69, -0.55]}
            scale={2.34}
          />
          <mesh
            name="tree_leaves009_0"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves009_0.geometry}
            material={materials.leaves}
            rotation={[-0.81, -0.69, -0.55]}
            scale={2.34}
          />
          <mesh
            name="tree_leaves009_0001"
            castShadow
            receiveShadow
            geometry={nodes.tree_leaves009_0001.geometry}
            material={materials.leaves}
            rotation={[0.64, 0.3, -1.17]}
            scale={2.21}
          />
          <group
            name="tree_leaves010"
            position={[-63.8, 1.68, 9.79]}
            rotation={[0.91, -0.69, -1.71]}
            scale={1.11}
          />
          <group
            name="tree_leaves011"
            position={[-63.91, 4.09, 6.23]}
            rotation={[0.91, -0.69, -1.71]}
            scale={2.26}
          />
          <group
            name="tree_leaves012"
            position={[-65.95, 1.6, 4.48]}
            rotation={[-0.83, -0.8, 1.85]}
            scale={1.92}
          />
          <group
            name="tree_leaves013"
            position={[-68.72, -0.06, 9.31]}
            rotation={[1.15, 0.2, -1.92]}
            scale={2.26}
          />
          <group
            name="tree_leaves014"
            position={[-69.3, -7.26, 10.03]}
            rotation={[0.64, 0.3, -1.17]}
            scale={1.24}
          />
          <group
            name="tree_leaves015"
            position={[-67.56, -8.28, 11.37]}
            rotation={[-0.61, 0.43, -0.41]}
            scale={0.77}
          />
          <group
            name="tree_leaves016"
            position={[-67.46, -4.86, 12.87]}
            rotation={[0.64, 0.3, -1.17]}
            scale={2.21}
          />
          <group
            name="tree_leaves017"
            position={[-63.32, -5.28, 14.49]}
            rotation={[1.28, -0.14, -2.17]}
            scale={1.61}
          />
          <group
            name="tree_leaves018"
            position={[-59.21, -2.85, 14.88]}
            rotation={[0.96, -0.07, -2.24]}
            scale={1.11}
          />
          <group
            name="tree_leaves019"
            position={[-59.05, -1.09, 13.7]}
            rotation={[0.99, -0.26, -1.77]}
            scale={0.77}
          />
          <group
            name="tree_mountain"
            rotation={[2.19, 0.98, 2.69]}
            scale={3.27}
          >
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain001"
            rotation={[1.66, 0.95, 3.04]}
            scale={2.8}
          >
            <mesh
              name="Plane005"
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane005_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane005_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain002"
            rotation={[1.45, 0.97, -2.9]}
            scale={3.27}
          >
            <mesh
              name="Plane022"
              castShadow
              receiveShadow
              geometry={nodes.Plane022.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane022_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane022_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain003"
            rotation={[1.09, 0.93, -2.55]}
            scale={1.89}
          >
            <mesh
              name="Plane021"
              castShadow
              receiveShadow
              geometry={nodes.Plane021.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane021_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane021_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain004"
            rotation={[1.32, 0.61, -2.62]}
            scale={2.8}
          >
            <mesh
              name="Plane020"
              castShadow
              receiveShadow
              geometry={nodes.Plane020.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane020_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane020_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain005"
            rotation={[1.51, 1.1, -3.06]}
            scale={2.8}
          >
            <mesh
              name="Plane019"
              castShadow
              receiveShadow
              geometry={nodes.Plane019.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane019_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane019_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain006"
            rotation={[1.66, 0.95, 3.04]}
            scale={2.8}
          >
            <mesh
              name="Plane018"
              castShadow
              receiveShadow
              geometry={nodes.Plane018.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane018_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane018_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain007"
            rotation={[1.51, 1.01, -3.1]}
            scale={2.8}
          >
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane008_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain008"
            rotation={[1.79, 0.9, 2.88]}
            scale={1.89}
          >
            <mesh
              name="Plane007"
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane007_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain009"
            rotation={[2.04, 1.06, 2.84]}
            scale={2.1}
          >
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain010"
            rotation={[-1.2, -1.09, -0.08]}
            scale={2.8}
          >
            <mesh
              name="Plane002"
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane002_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain011"
            rotation={[-2.7, -1.22, -1.76]}
            scale={1.89}
          >
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane009_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane009_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain012"
            rotation={[-1.26, -1.34, -0.42]}
            scale={2.8}
          >
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane010_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane010_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain013"
            rotation={[-1.36, -1.21, -0.24]}
            scale={2.8}
          >
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane011_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain014"
            rotation={[-2.4, -1.3, -1.57]}
            scale={2.8}
          >
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane012_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane012_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain015"
            rotation={[-0.99, -1.19, 0.21]}
            scale={2.8}
          >
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane013_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain016"
            rotation={[-0.95, -1.3, 0.48]}
            scale={1.89}
          >
            <mesh
              name="Plane014"
              castShadow
              receiveShadow
              geometry={nodes.Plane014.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane014_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane014_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain017"
            rotation={[-1.26, -1.36, -0.13]}
            scale={3.27}
          >
            <mesh
              name="Plane015"
              castShadow
              receiveShadow
              geometry={nodes.Plane015.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane015_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane015_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group name="tree_mountain018" rotation={[1.87, 0.97, 3]} scale={2.8}>
            <mesh
              name="Plane017"
              castShadow
              receiveShadow
              geometry={nodes.Plane017.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane017_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane017_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain019"
            rotation={[-1.37, -1.21, -0.22]}
            scale={2.8}
          >
            <mesh
              name="Plane023"
              castShadow
              receiveShadow
              geometry={nodes.Plane023.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane023_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane023_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain020"
            rotation={[-1.67, -1.16, -0.15]}
            scale={1.89}
          >
            <mesh
              name="Plane025"
              castShadow
              receiveShadow
              geometry={nodes.Plane025.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane025_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane025_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <group
            name="tree_mountain021"
            rotation={[-1.36, -1.11, -0.11]}
            scale={1.89}
          >
            <mesh
              name="Plane026"
              castShadow
              receiveShadow
              geometry={nodes.Plane026.geometry}
              material={materials["tree-trunk.001"]}
            />
            <mesh
              name="Plane026_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane026_1.geometry}
              material={materials["tree-leaves"]}
            />
          </group>
          <mesh
            name="Water-sphere"
            castShadow
            receiveShadow
            geometry={nodes["Water-sphere"].geometry}
            material={materials.water}
            rotation={[-0.66, 0.27, -2.96]}
            scale={52.36}
          />
          <group name="Armature001" rotation={[2.55, -0.72, 0.16]} scale={5.39}>
            <primitive object={nodes.Armature_rootJoint} />
          </group>
          <group name="Armature002" rotation={[-0.83, -0.8, 1.85]} scale={5.08}>
            <primitive object={nodes.Armature_rootJoint_1} />
          </group>
          <mesh
            name="rock1"
            castShadow
            receiveShadow
            geometry={nodes.rock1.geometry}
            material={materials.rocks}
            rotation={[-1.21, 0.49, -0.96]}
            scale={[0.13, 0.19, 0.13]}
          />
          <mesh
            name="rock2"
            castShadow
            receiveShadow
            geometry={nodes.rock2.geometry}
            material={materials.rocks}
            rotation={[-1.33, -0.09, -0.87]}
            scale={[0.13, 0.19, 0.13]}
          />
          <mesh
            name="rock6"
            castShadow
            receiveShadow
            geometry={nodes.rock6.geometry}
            material={materials.rocks}
            rotation={[-2.31, 0.02, -0.24]}
            scale={[0.07, 0.1, 0.07]}
          />
          <mesh
            name="rock3"
            castShadow
            receiveShadow
            geometry={nodes.rock3.geometry}
            material={materials.rocks}
            rotation={[-1.71, 0.29, -0.66]}
            scale={[0.13, 0.19, 0.13]}
          />
          <mesh
            name="rock4"
            castShadow
            receiveShadow
            geometry={nodes.rock4.geometry}
            material={materials.rocks}
            rotation={[0.64, -0.32, -2.22]}
            scale={[0.13, 0.19, 0.1]}
          />
          <mesh
            name="rock7"
            castShadow
            receiveShadow
            geometry={nodes.rock7.geometry}
            material={materials.rocks}
            rotation={[-0.35, 0.85, -1.57]}
            scale={[0.13, 0.19, 0.13]}
          />
          <mesh
            name="rock5"
            castShadow
            receiveShadow
            geometry={nodes.rock5.geometry}
            material={materials.rocks}
            rotation={[-0.42, 0.67, -1.3]}
            scale={[0.21, 0.29, 0.18]}
          />
          <group name="trunk_in_1" rotation={[2.9, 0.6, -1.15]} scale={0.09}>
            <mesh
              name="Mesh074"
              castShadow
              receiveShadow
              geometry={nodes.Mesh074.geometry}
              material={materials["inner tree trunk"]}
            />
            <mesh
              name="Mesh074_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh074_1.geometry}
              material={materials["light tree trunks"]}
            />
          </group>
          <group name="tent_orange" rotation={[0.61, 0.93, -2.5]} scale={0.14}>
            <mesh
              name="Mesh030"
              castShadow
              receiveShadow
              geometry={nodes.Mesh030.geometry}
              material={materials.tent}
            />
            <mesh
              name="Mesh030_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh030_1.geometry}
              material={materials["Material #52"]}
            />
            <mesh
              name="Mesh030_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh030_2.geometry}
              material={materials.bridge}
            />
          </group>
          <group name="trunk_in_2" rotation={[3, 0.57, -2.54]} scale={0.15}>
            <mesh
              name="Mesh075"
              castShadow
              receiveShadow
              geometry={nodes.Mesh075.geometry}
              material={materials["inner tree trunk"]}
            />
            <mesh
              name="Mesh075_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh075_1.geometry}
              material={materials["light tree trunks"]}
            />
          </group>
          <skinnedMesh
            name="tree_0"
            geometry={nodes.tree_0.geometry}
            material={materials.wood}
            skeleton={nodes.tree_0.skeleton}
          />
          <skinnedMesh
            name="tree_0001"
            geometry={nodes.tree_0001.geometry}
            material={materials.wood}
            skeleton={nodes.tree_0001.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/myWorld_v15.glb");
