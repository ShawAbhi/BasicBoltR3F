/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Man(props: React.ComponentProps<'group'>) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('../Man.glb')
  return (
    <group position={[0,-2,0]} rotation={[0,22/7,0]} scale={2} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Peasant_Nolant(Free_Version)fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="metarig" rotation={[-Math.PI / 2, 0, Math.PI]} scale={98.232}>
              <group name="Object_7" rotation={[-Math.PI / 2, 0, Math.PI]} scale={98.232} />
              <primitive object={nodes.spine_00} />
              <group name="Object_53" rotation={[-Math.PI / 2, 0, Math.PI]} scale={98.232} />
            </group>
          </group>
          <skinnedMesh
            name="Object_8"
            castShadow
            geometry={(nodes.Object_8 as THREE.Mesh).geometry}
            material={materials.Material}
            skeleton={(nodes.Object_8 as THREE.SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Object_54"
            castShadow
            geometry={(nodes.Object_54 as THREE.Mesh).geometry}
            material={materials.Material}
            skeleton={(nodes.Object_54 as THREE.SkinnedMesh).skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../Man.glb')