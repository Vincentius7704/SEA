import React from 'react'
import logo from './logo-no-background.png'
import Image from 'next/image'


{/* Function =  this is a Universal Navigation Bar that help user navigate to other page
    Location = Location is in the entire page
    Description = It  can navigate to Home(main page) Movie page , Balance page , History page */}

const UniNavbar = () => {
  return (
    <div className='z-50 text-white  w-screen top-7 max-w-3xl py-4 rounded-full bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg fixed'>
        <div className='flex justify-between px-7 items-center'>
            <Image src={logo} alt = 'logo' className='h-10 w-36'></Image>
            <ul className='flex gap-5'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Movie</li>
                <li className='cursor-pointer'>Movie</li>
                <li className='cursor-pointer'>History</li>
            </ul>
        </div>
    </div>
  )
}

export default UniNavbar