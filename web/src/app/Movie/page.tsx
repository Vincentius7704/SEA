"use client"
import React from 'react'
import UniNavbar from '../UniNavbar'
import Image from 'next/image'
import BookTicket from './BookTicket'
import { client } from '../lib/pocketbase'
import { useEffect , useState } from 'react'


const Home = () => {
  const [movie , setMovie] = useState([])
  const [age  , setAge] = useState(18)
  const [movie_title , setMovie_title] = useState('Suzume')
  const [movie_description , setMovie_description] = useState('meh')
  const [date_release , setDate_release] = useState('meh')
  const [movie_poster , setMovie_poster] = useState('meh')
  useEffect(() => {
    client.collection('SEAmovie').getFullList().then((res) => {
      console.log(res) 
      setMovie(res)})
  }, [])
  
  function infoHandler(){
    
  }






  return (
    <div className='flex justify-center w-screen h-screen -mt-6 text-white bg-black overflow-clip'>
      <UniNavbar></UniNavbar>
      <div className='relative z-0 flex flex-col items-center justify-center w-full h-full mt-4 '>
        {/* this div display Movie Poster diperbesar , deskripsi film */}
        <div className='relative w-full h-2/5 md:h-4/5 md:items-center md:justify-center'>
          {/* div for text */}
          <div className='relative z-0 flex flex-col gap-2 pl-5 translate-y-4 w-fit md:justify-start md:w-full md:mt-32 md:px-96 '>
            <h1 className='z-10 text-2xl text-white md:text-6xl'>Suzume</h1>
            <div className='z-10 flex text-xs text-gray-400 gap-7 md:text-sm'>
              <p>18+</p>
              <p>27-05-2020</p>
            </div>
            <p className='z-10 text-xs max-w-[210px] md:max-w-xl md:text-lg'>This is the movie description. You know what i juts like watching anime like suzume. That was a really really great Anime and i want to wathc it again , i wish i can see more anime like thata, literallly the graphics wow</p>

            {/* booking Ticket */}
            <BookTicket></BookTicket>

            {/* div display large images */}
          </div>
          <div className='absolute top-0 right-0 -translate-y-16 -z-10 w-72 h-96 md:top-1/3 md:right-1/4 md:w-[500px] md:h-[670px] md:-translate-y-48 md:translate-x-20 bg-[url(https://w0.peakpx.com/wallpaper/119/522/HD-wallpaper-anime-suzume-no-tojimari.jpg)] bg-center'></div>
          <div className='absolute top-0 right-0 -translate-y-16 -z-10 w-72 h-96 md:top-1/3 md:right-1/4 md:w-[500px] md:h-[670px] md:-translate-y-48 md:translate-x-20' style={{
            background: 'radial-gradient(closest-side , transparent , black)'
          }}></div>
        </div>
        {/*this div dsiplay movie list in a box form that can be X-scrolled Displayed content depend on this */}
        <div className='flex w-full pb-0 translate-y-10 min-h-1/4 md:h-2/5 md:items-center'>
          <div className='flex w-full gap-1 overflow-x-auto md:justify-center md:gap-3 '>
           {movie.map(({ collectionId , title , description , time_release , price , id , age_rating , seat , posterurl })=>{
            return(
              <div className='flex-none w-fit h-fit' key = {id} >
                <div 
                
                style={{'--image-url': `url(${posterurl})`}} 
                className={`flex-none w-24 h-36 bg-black rounded-xl  border-white border-[1px] bg-cover bg-[image:var(--image-url)] overflow-clip`}>
                  <div className='w-full h-full transition duration-1000 rounded-xl hover:bg-white/30 hover:duration-300'></div>
                </div>
              </div>
            )
           })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home