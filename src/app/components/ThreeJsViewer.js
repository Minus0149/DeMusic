'use client'
import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ThreeJsViewer = () => {
  const gltf = useLoader(GLTFLoader, '/models/scene.gltf')
  return (
    <Canvas>
      <color attach="background" args={['#000']} />
      <fog attach="fog" args={['#000', 10, 20]} />
      <PresentationControls
        speed={0.7}
        global
        zoom={0.2}
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment={'city'} intensity={0.6} contactShadow={false}>
          <primitive object={gltf.scene} />
        </Stage>
        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={512}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh> */}
      </PresentationControls>
    </Canvas>
  )
}

export default ThreeJsViewer
