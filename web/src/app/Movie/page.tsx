import React from 'react'
import UniNavbar from '../UniNavbar'
const poster = 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'

const Home = () => {
  return (
    <div className='w-screen h-screen text-white -mt-6 z-0 flex justify-center'>
        <UniNavbar></UniNavbar>
        <div className='pt-40 w-full h-full flex justify-center'>
            {/* Movie Displayer */}
            <div className=' rounded-3xl w-10/12 h-full max-h-3xl mx-10 grid bg-opacity-5 backdrop-blur-lg drop-shadow-lg fixed bg-white grid-cols-2 md:grid-cols-4 overflow-y-auto gap-1 justify-items-center items-center gap-y-3'>
                <div className='bg-white rounded-3xl w-32 h-44 md:h-56 md:w-44'></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44'></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44 '></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44'></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44 '></div>
                <div className='bg-white rounded-3xl w-32 h-44 md:h-56 md:w-44 '></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44 ' ></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-52 md:w-44 '></div>
                <div className='bg-white rounded-3xl w-32 h-44 md:h-56 md:w-44'></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44'></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44 '></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44'></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44 '></div>
                <div className='bg-white rounded-3xl w-32 h-44 md:h-56 md:w-44 '></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-56 md:w-44 ' ></div>
                <div className='bg-white rounded-3xl  w-32 h-44 md:h-52 md:w-44 '></div>
               
           
            </div>
        </div>
    </div>
  )
}

export default Home