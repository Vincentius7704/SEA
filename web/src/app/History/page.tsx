import React from 'react'
import UniNavbar from '../UniNavbar'
import { History } from '../Balance/page'

const Home = () => {
  return (
    <div className='z-0 flex justify-center w-screen h-screen -mt-6 text-white '>
      <UniNavbar></UniNavbar>
      <div className='absolute bottom-0 flex flex-col items-center w-full gap-5 mt-40 shadow-inner h-4/5 overflow-clip md:bottom-none md:h-screen '>
          <History></History>
        </div>
    </div>
  )
}

export default Home