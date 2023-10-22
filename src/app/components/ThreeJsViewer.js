'use client'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ThreeJsViewer = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

export default ThreeJsViewer
