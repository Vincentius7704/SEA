import Image from 'next/image'
import UniNavbar from './UniNavbar'
import Hero from './Hero'
import {motion} from 'framer-motion'


export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-black ">
       <UniNavbar></UniNavbar>
       <Hero></Hero>
    </main>
  )
}
