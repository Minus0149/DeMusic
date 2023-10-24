import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/scene.glb')
  const ref = useRef()
  const timeline = useRef()
  const scroll = useScroll()
  useFrame(() => {
    timeline.current.seek(scroll.offset * timeline.current.duration())
  })

  useLayoutEffect(() => {
    timeline.current = gsap.timeline()
    timeline.current
      .to(ref.current.position, { duration: 2, x: 0, y: -2, z: -Math.PI }, 0)
      .to(ref.current.rotation, { duration: 2, x: 0, y: Math.PI, z: 0 }, 1)
  }, [])

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.Sphere_0.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.717}
      />
      <mesh
        geometry={nodes.Sphere_1.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.717}
      />
      <mesh
        geometry={nodes.Sphere_2.geometry}
        material={materials['Material.003']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.717}
      />
    </group>
  )
}

useGLTF.preload('./models/scene.glb')
