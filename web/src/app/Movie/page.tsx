import React from 'react'
import UniNavbar from '../UniNavbar'
const poster = 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'

const Home = () => {
  return (
    <div className='z-0 flex justify-center w-screen h-screen -mt-6 text-white'>
        <UniNavbar></UniNavbar>
        <div className='flex justify-center w-full h-full pt-40'>
            {/* Movie Displayer */}
            <div className='fixed grid items-center w-10/12 h-full grid-cols-2 gap-1 mx-10 overflow-y-auto bg-white  rounded-3xl max-h-3xl bg-opacity-5 backdrop-blur-lg drop-shadow-lg md:grid-cols-4 justify-items-center gap-y-52'>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44'></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44'></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 '></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44'></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 '></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 '></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 ' ></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-52 md:w-44 '></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44'></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44'></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 '></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44'></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 '></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 '></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-56 md:w-44 ' ></div>
                <div className='w-32 bg-white rounded-3xl h-44 md:h-52 md:w-44 '></div>
               
           
            </div>
        </div>
    </div>
  )
}

export default Home