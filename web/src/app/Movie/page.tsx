import React from 'react'
import UniNavbar from '../UniNavbar'
import poster from './movie-poster-example.jpg'
import Image from 'next/image'
import suzume from './Suzume.jpg'
const suzlink = 'https://w0.peakpx.com/wallpaper/119/522/HD-wallpaper-anime-suzume-no-tojimari.jpg'
const Home = () => {
  return (
    <div className='flex justify-center w-screen h-screen -mt-6 text-white bg-black '>
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
                  <button className='flex items-center justify-start w-40 px-0.5 py-0.5 mt-5 rounded-3xl bg-gradient-to-r from-red-700 z-10'>              
                    <p className='px-2'>Book Now</p>                 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 px-2" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>
                  </button>
                  
              {/* div display large images */}
              </div>
              <div  className='absolute top-0 right-0 -translate-y-16 -z-10 w-72 h-96 md:top-1/3 md:right-1/4 md:w-[500px] md:h-[670px] md:-translate-y-48 md:translate-x-20 bg-[url(https://w0.peakpx.com/wallpaper/119/522/HD-wallpaper-anime-suzume-no-tojimari.jpg)] bg-center'></div>
              <div className='absolute top-0 right-0 -translate-y-16 -z-10 w-72 h-96 md:top-1/3 md:right-1/4 md:w-[500px] md:h-[670px] md:-translate-y-48 md:translate-x-20' style = {{
                background : 'radial-gradient(closest-side , transparent , black)'
              }}></div>
            </div>
          {/*this div dsiplay movie list in a box form that can be X-scrolled Displayed content depend on this */}
            <div className='flex w-full pb-10 h-1/4 md:h-2/5 md:items-center md:pb-0'>
                <div className='flex w-full gap-1 overflow-x-auto md:justify-center md:gap-3 '>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                  <div className='flex-none w-fit h-fit'>
                   <div className='flex-none w-24 h-36 bg-black rounded-xl bg-[url(https://www.cwfilms.jp/en/news/images/12809e7f10e8ec3c6691c5c0c1be7cc50fe00ba6.jpg)] bg-cover border-white border-[1px]'>
                   </div>
                  </div>
                   
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home