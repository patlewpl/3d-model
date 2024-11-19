/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 donut.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/donut.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Donut.geometry} material={materials['Material.001']} position={[0, -0.024, 0]} scale={3.77} />
      <mesh geometry={nodes.Icing.geometry} material={materials['Material.002']} position={[0, 0.041, 0]} scale={3.77} />
    </group>
  )
}

useGLTF.preload('/donut.gltf')