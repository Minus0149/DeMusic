'use client'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Model } from './Model.js'
import NavBar from '@/app/components/NavBar.js'
import { Suspense } from 'react'

const ThreeJsViewer = () => {
  return (
    <>
      <ambientLight />
      <OrbitControls enableZoom={false} makeDefault />
      <ScrollControls pages={1} damping={0.55}>
        <NavBar />
        <Suspense>
          <Model />
        </Suspense>
      </ScrollControls>
      <Environment preset="city" />
    </>
  )
}

export default ThreeJsViewer
