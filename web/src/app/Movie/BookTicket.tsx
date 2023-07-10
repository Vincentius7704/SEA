import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'


const BookTicket = () => {
  return ( 
  <Dialog>
    <DialogTrigger>
       <button className='flex items-center justify-start w-40 px-0.5 py-0.5 mt-5 rounded-3xl bg-gradient-to-r from-red-700 z-10'>              
            <p className='px-2'>Book Now</p>                 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 px-2" ><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" /></svg>
       </button>
     </DialogTrigger>
     <DialogContent >
        <DialogHeader>
            <DialogTitle>Ticket Booking</DialogTitle>
            <DialogDescription>Pick the seat that avalaible <br /> Rp 51.000,- per seat</DialogDescription>
            
        </DialogHeader>
        <div className='flex items-center justify-center w-full'>
            <div className='h-3 bg-gray-500 rounded-full w-52'></div>
        </div>
        <div className='grid grid-cols-11 gap-3 px-4'>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>
            <div className='w-4 h-4 bg-gray-500 rounded-3xl'></div>           
        </div>
        <div className='font-medium'>
            <p>Total seat picked : 7</p>
            <p className='text-xl font-semibold'>Total price : Rp 700.000</p>
        </div>
        <Button variant="outline">Purcbhase</Button>
     </DialogContent>
  </Dialog>
  )
}

export default BookTicket