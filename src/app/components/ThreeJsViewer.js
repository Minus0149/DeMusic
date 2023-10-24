'use client'
import {
  Environment,
  OrbitControls,
  PresentationControls,
  ScrollControls,
} from '@react-three/drei'
import { Model } from './Model.js'
import NavBar from '@/app/components/NavBar.js'
import { Suspense } from 'react'

const ThreeJsViewer = () => {
  return (
    <>
      <ambientLight />
      <PresentationControls
        snap
        cursor={false}
        makeDefault
        polar={[0, Math.PI / 2]}
      >
        <ScrollControls>
          <NavBar />
          <Suspense>
            <Model />
          </Suspense>
        </ScrollControls>
      </PresentationControls>
      <Environment preset="city" />
    </>
  )
}

export default ThreeJsViewer
