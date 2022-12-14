/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/1-2.glb");
  const { actions } = useAnimations(animations, group);
  console.log(actions);
//   actions.forEach((action) =>)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="car001"
          position={[0.1, 3.63, 1.69]}
          rotation={[0.72, -1.31, 0.24]}
          scale={[0.01, 0.04, 0.08]}
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
              name="car"
              position={[0.18, 0.03, 0.02]}
              rotation={[-0.01, 0, -0.11]}
              scale={[0.01, 0.04, 0.08]}
            >
              <mesh
                name="Cube002"
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials.cloud}
              />
              <mesh
                name="Cube002_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_1.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                name="Cube002_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_2.geometry}
                material={materials["lib-window-glass"]}
              />
              <mesh
                name="Cube002_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_3.geometry}
                material={materials.tires}
              />
              <mesh
                name="Cube002_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_4.geometry}
                material={materials["car-backlight"]}
              />
              <mesh
                name="Cube002_5"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_5.geometry}
                material={materials["lib-green-accent"]}
              />
              <mesh
                name="Cube002_6"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_6.geometry}
                material={materials["suitecase-green"]}
              />
              <mesh
                name="Cube002_7"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_7.geometry}
                material={materials["suitcase-purple"]}
              />
              <mesh
                name="Cube002_8"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_8.geometry}
                material={materials["bridge-gaurd"]}
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
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/1-2.glb");
