import React from 'react'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='z-0 flex justify-center w-screen h-screen -mt-6 text-white '>
        <div className='flex items-center justify-center w-full max-w-5xl overflow-clip'>
            <div className='flex flex-col justify-center gap-5 -translate-y-20 px-7 md:translate-y-4'>
                <p className='text-xl md:text-3xl'>This is</p>
                <h1 className='text-5xl font-semibold md:text-9xl'>SEA Cinema</h1>
                <p className='text-xl'>Get your life more exiciting</p>
                <Link href = '/Movie'>
                <button className='flex items-center justify-start px-2 py-2 mt-5 rounded-full bg-gradient-to-r from-red-700 w-60'>
                    
                    <p className='px-2'>See Movies</p>
                    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 px-2" >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                </svg>
                </button>
                </Link>
           
            </div>

        </div>
    </div>
  )
}

export default Hero