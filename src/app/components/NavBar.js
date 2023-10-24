'use client'
import { useState } from 'react'
import { Scroll } from '@react-three/drei'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import { TiThMenuOutline } from 'react-icons/ti'

const NavBar = () => {
  const [hamState, setHamState] = useState(false)

  return (
    <Scroll html className="w-full">
      <div
        className={`bg-zinc-950 absolute p-4 right-5 rounded-full top-5 items-center flex flex-col lg:hidded xl:hidden  ${
          hamState && 'rounded-none top-0 right-0 w-full text-center'
        }`}
      >
        <button onClick={() => setHamState(!hamState)}>
          {hamState ? <FiX size={35} /> : <TiThMenuOutline size={35} />}
        </button>

        {hamState && (
          <div className="lg:hidden flex flex-col items-center justify-around text-lg  pt-5 font-medium font-mono space-y-12">
            <Link href="#">
              <span className="font-extrabold">JARVIS</span>
            </Link>
            <ul className="flex flex-col space-y-12">
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
              <span className="font-extrabold">TRY JARVIS </span>It&apos;s free!
            </Link>
          </div>
        )}
      </div>
      <div className="bg-white h-16 lg:block hidden">
        <div className=" flex justify-around text-lg text-black pt-5 font-medium font-mono ">
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
            <span className="font-extrabold">TRY JARVIS </span>It&apos;s free!
          </Link>
        </div>
      </div>
    </Scroll>
  )
}

export default NavBar
