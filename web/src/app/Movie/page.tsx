"use client"
import React from 'react'
import UniNavbar from '../UniNavbar'
import Image from 'next/image'
import BookTicket from './BookTicket'
import { client , updateBalance } from '../lib/pocketbase'
import { useEffect , useState } from 'react'


const Home = () => {
  const [movie , setMovie] = useState([])
  const [age  , setAge] = useState(18)
  const [movie_title , setMovie_title] = useState('Suzume')
  const [movie_description , setMovie_description] = useState('meh')
  const [date_release , setDate_release] = useState('meh')
  const [movie_poster , setMovie_poster] = useState('meh')
  const [price, setPrice] = useState(0)
  useEffect(() => {
    client.collection('SEAmovie').getFullList().then((res) => {
      console.log(res) 
      setMovie(res)
    infoHandler(res[0].title , res[0].age_rating , res[0].time_release , res[0].description , res[0].posterurl , res[0].price)})
  }, [])
  
  function infoHandler(title , age_rating , date , description , poster , price){
    setMovie_title(title)
    setAge(age_rating)
    setDate_release(date)
    setMovie_description(description)
    setMovie_poster(poster)
    setPrice(price)
    console.log(age , movie_title , movie_description , date_release , movie_poster)
  }






  return (
    <div className='flex justify-center w-screen h-screen -mt-6 text-white bg-black overflow-clip'>
      <UniNavbar></UniNavbar>
      <div className='relative z-0 flex flex-col items-center justify-center w-full h-full mt-4 '>
        {/* this div display Movie Poster diperbesar , deskripsi film */}
        <div className='relative w-full h-2/5 md:h-4/5 md:items-center md:justify-center'>
          {/* div for text */}
          <div className='relative z-0 flex flex-col gap-2 pl-5 md:translate-y-4 w-fit md:justify-start md:w-full md:mt-32 md:px-96 '>
            <h1 className='z-10 text-2xl text-white md:text-6xl'>{movie_title}</h1>
            <div className='z-10 flex text-xs text-gray-400 gap-7 md:text-sm'>
              <p>{age}+</p>
              <p>{date_release}</p>
            </div>
            <p className='z-10 text-xs max-w-[210px] md:max-w-xl md:text-lg max-h-48 overflow-x-auto'>{movie_description}</p>

            {/* booking Ticket */}
            <BookTicket></BookTicket>

            {/* div display large images */}
          </div>
          <div 
          style={{'--image-url': `url(${movie_poster})`}} 
          className='absolute top-0 right-0 -translate-y-16 -z-10 w-72 h-96 md:top-1/3 md:right-1/4 md:w-[500px] md:h-[670px] md:-translate-y-48 md:translate-x-20  bg-[image:var(--image-url)] bg-cover'></div>
          <div className='absolute top-0 right-0 -translate-y-16 -z-10 w-72 h-96 md:top-1/3 md:right-1/4 md:w-[500px] md:h-[670px] md:-translate-y-48 md:translate-x-20' style={{
            background: 'radial-gradient(closest-side , transparent , black)'
          }}></div>
        </div>
        {/*this div dsiplay movie list in a box form that can be X-scrolled Displayed content depend on this */}
        <div className='flex w-full pb-0 translate-y-10 min-h-1/4 md:h-2/5 md:items-center'>
          <div className='flex justify-center w-full gap-1 overflow-x-auto md:gap-3 '>
           {movie.map(({ collectionId , title , description , time_release , price , id , age_rating , seat , posterurl })=>{
            return(
              <div className='flex-none w-fit h-fit' key = {id} >
                <div 
                onClick = {()=>infoHandler(title , age_rating , time_release , description, posterurl , price)}
                style={{'--image-url': `url(${posterurl})`}} 
                className={`flex-none w-24 h-36 bg-black rounded-xl  border-white border-[1px] bg-cover bg-[image:var(--image-url)] overflow-clip focus:ring focus:ring-white`}>
                  <div className='w-full h-full transition duration-1000 rounded-xl hover:bg-white/30 hover:duration-300 '></div>
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