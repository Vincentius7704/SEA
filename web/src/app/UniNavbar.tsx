import React from 'react'
import logo from './logo-no-background.png'
import Image from 'next/image'
import Link from 'next/link'

{/* Function =  this is a Universal Navigation Bar that help user navigate to other page
    Location = Location is in the entire page
    Description = It  can navigate to Home(main page) Movie page , Balance page , History page */}

const UniNavbar = () => {
  return (
    <div className='fixed z-10 w-screen max-w-3xl py-4 text-white bg-white rounded-full top-7 bg-opacity-10 backdrop-blur-lg drop-shadow-lg'>
        <div className='flex items-center justify-between px-7'>
            <Image src={logo} alt = 'logo' className='h-10 w-36'></Image>
            <ul className='flex gap-5'>
                <Link href='/'>
                    <li className='cursor-pointer'>Home </li>
                </Link>
                <Link href = '/Movie'>
                    <li className='cursor-pointer'>Movie </li>
                </Link>
                <Link href='/Balance'>
                    <li className='cursor-pointer'>Balance</li>
                </Link>
                <a href='/History'>
                    <li className='cursor-pointer'>History</li>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default UniNavbar