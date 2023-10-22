'use client'

import { Canvas } from '@react-three/fiber'
import Nav from '@/app/components/Nav'
import ThreeJsViewer from '@/app/components/ThreeJsViewer'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Nav />
      <Canvas>
        <ThreeJsViewer />
      </Canvas>
    </div>
  )
}
