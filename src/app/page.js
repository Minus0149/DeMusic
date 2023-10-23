'use client'

import { Canvas } from '@react-three/fiber'
import ThreeJsViewer from '@/app/components/ThreeJsViewer'

export default function Home() {
  return (
    <div className="bg-black text-white h-full w-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ThreeJsViewer />
      </Canvas>
    </div>
  )
}
