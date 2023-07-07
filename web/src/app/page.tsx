import Image from 'next/image'
import UniNavbar from './UniNavbar'
import Hero from './Hero'
import {motion} from 'framer-motion'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black ">
       <UniNavbar></UniNavbar>
       <Hero></Hero>
    </main>
  )
}
