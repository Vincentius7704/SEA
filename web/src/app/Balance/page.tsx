import React from 'react'
import UniNavbar from '../UniNavbar'

export const BalanceBar = () => {
  return(
    <div className='flex justify-center w-screen mt-40 '>
    <div className='flex flex-col justify-between w-9/12 h-40 mx-10 md:h-56 md:w-2/5 md:mx-40 bg-gradient-to-br from-blue-950 to-cyan-300 rounded-3xl'>
        <div className='flex flex-col px-5 py-5'>
            <h1 className='text-lg md:text-2xl'>My Balance</h1>
            <p className='text-2xl font-semibold md:text-5xl'>Rp. 500.000</p>
        </div>
        <ul className='flex justify-between px-10 py-3 text-[10px] md:py-5 md:text-lg '>

            <li className='flex flex-col items-center cursor-pointer jusify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

              <p className=''>Top Up</p>
            </li >

            <li  className='flex flex-col items-center cursor-pointer jusify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
</svg>

                <p>Withdraw</p>
            </li>

            <li  className='flex flex-col items-center cursor-pointer jusify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
</svg>

                <p>History</p>
            </li>

            <li  className='flex flex-col items-center cursor-pointer jusify-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                   </svg>
                 <p>Cancel</p>
            </li>
        </ul>
    </div>
</div>
  )
}

function TopUp(){ 
  return(
    <div className='fixed bottom-0 w-10/12 bg-white h-[400px] shadow-inner rounded-t-2xl bg-opacity-10 backdrop-blur-lg drop-shadow-lg flex mx-auto flex-col gap-5 items-center'>
      <div className='flex justify-start w-full gap-10 px-10 pt-5'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black md:text-white shadow-3xl">
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
         </svg>
         <p className='font-medium text-black md:text-white'>Top-Up</p>
      </div>
      <div className='w-10/12 '>
        <p className=''>Masukan jumlah</p>
        <div className='flex items-center gap-5 mt-4'>
        <input type="text" className='text-black rounded-full '/>
        <button className='px-3 py-1 rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 w-fit h-fit'>Top-Up!</button>
        </div>
      </div>

    </div>
   )
}

function Withdraw(){
  return(
    <div className='fixed bottom-0 w-10/12 bg-white h-[400px] shadow-inner rounded-t-2xl bg-opacity-10 backdrop-blur-lg drop-shadow-lg flex mx-auto flex-col gap-5 items-center'>
      <div className='flex justify-start w-full gap-10 px-10 pt-5'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black md:text-white shadow-3xl">
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
         </svg>
         <p className='font-medium text-black md:text-white'>Withdraw</p>
      </div>
      <div className='w-10/12 '>
        <p className=''>Masukan jumlah</p>
        <div className='flex items-center gap-5 mt-4'>
        <input type="text" className='text-black rounded-full shadow-inner '/>
        <button className='px-3 py-1 rounded-full bg-gradient-to-r from-red-700 to-cyan-600 w-fit h-fit'>Withdraw</button>
        </div>
      </div>

    </div>
  )
}

function History(){
  return(
    <div className='flex flex-col items-center w-10/12 h-screen gap-5 mx-auto bg-white shadow-inner rounded-t-2xl bg-opacity-10 backdrop-blur-lg drop-shadow-lg'>
     <div className='flex justify-start w-full gap-10 px-10 pt-5'>
      
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black md:text-white shadow-3xl">
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
         </svg>
         <p className='font-medium text-black md:text-white'>History</p>
      </div>
      <div className='flex flex-col w-10/12 gap-3 overflow-y-auto '>
        <div className='w-10/12 h-10 bg-gray-200 rounded-full md:w-7/12'></div>
        <div className='w-10/12 h-10 bg-gray-200 rounded-full md:w-7/12 '></div>
        <div className='w-10/12 h-10 bg-gray-200 rounded-full md:w-7/12 '></div>
        <div className='w-10/12 h-10 bg-gray-200 rounded-full md:w-7/12 '></div>
        <div className='w-10/12 h-10 bg-gray-200 rounded-full md:w-7/12 '></div>
        <div className='w-10/12 h-10 bg-gray-200 rounded-full md:w-7/12 '></div>
      </div>


    </div>
  )
}
const Home = () => {
  return (
    <div className='z-0 flex justify-center w-screen h-screen -mt-6 text-white md:h-screen'>
        <UniNavbar></UniNavbar>
        <BalanceBar></BalanceBar>
        <div className='fixed bottom-0 w-full  h-[400px] shadow-inner  flex mx-auto flex-col gap-5 items-center '>
          <History></History>
        </div>
    </div>
  )
}

export default Home