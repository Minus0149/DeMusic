'use client'
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  ScrollControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from './Model.js'
import NavBar from '@/app/components/NavBar.js'

const ThreeJsViewer = () => {
  return (
    <>
      <ambientLight />
      <OrbitControls enableZoom={false} makeDefault />
      <ScrollControls pages={3} damping={0.25}>
        <NavBar />
        <Model />
      </ScrollControls>
      <Environment preset="city" />
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={512}
          mixBlur={0}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1}
          color="#000"
          metalness={0.3}
        />
      </mesh> */}
    </>
  )
}

export default ThreeJsViewer
