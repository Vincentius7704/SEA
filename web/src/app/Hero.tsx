import React from 'react'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='w-screen h-screen text-white -mt-6 z-0 flex justify-center '>
        <div className='w-full max-w-5xl flex items-center'>
            <div className='flex flex-col gap-5'>
                <p className='text-3xl'>This is</p>
                <h1 className='text-9xl font-semibold'>SEA Cinema</h1>
                <p className='text-xl'>Get your life more exiciting</p>
                <Link href = '/Movie'>
                <button className='mt-5 bg-gradient-to-r from-red-700 px-2 py-2 rounded-full w-60 flex justify-start items-center'>
                    
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