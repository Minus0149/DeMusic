'use client'

import { Scroll } from '@react-three/drei'
import Link from 'next/link'

const Nav = () => {
  return (
    <Scroll html className=" w-full">
      <div className="bg-white h-16">
        <div className="flex justify-around text-lg text-black pt-5 font-medium font-mono">
          <Link href="#">
            <span className="font-extrabold">JARVIS</span>
          </Link>
          <ul className="flex space-x-24">
            <li>
              <Link href="#features">FEATURES</Link>
            </li>
            <li>
              <Link href="#about">ABOUT</Link>
            </li>
            <li>
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>
          <Link href="/" className="font-medium">
            <span className="font-extrabold">TRY JARVIS </span>It's free!
          </Link>
        </div>
      </div>
    </Scroll>
  )
}

export default Nav
