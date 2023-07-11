"use client"
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Toggle } from "@/components/ui/toggle"
import { useState } from 'react'
import { Input } from '@/components/ui/input'

function Seat() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Toggle className='w-4 h-4 bg-gray-500 rounded-3xl border-red-500 border-[1px]' variant='outline'>
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>
          <p>Seat 1</p>
        </TooltipContent>

      </Tooltip>
    </TooltipProvider>
  )
}

const BookTicket = () => {
  const [toage , setToage] = useState(true)
  const [age , setAge] = useState()
  return (
    <Dialog >
      <DialogTrigger>
        <button className='flex items-center justify-start w-fit px-0.5 py-0.5 mt-5 rounded-3xl bg-gradient-to-r from-red-700 z-10'>
          <p className='px-2'>Book Now</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 px-2" ><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" /></svg>
        </button>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Ticket Booking</DialogTitle>
          <DialogDescription>Pick the seat that avalaible <br /> Rp 51.000,- per seat</DialogDescription>

        </DialogHeader>
        <div className={'flex items-center justify-center w-full' + 'font-medium ' +  (toage? '  ': ' hidden ' )}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className='h-3 bg-gray-500 rounded-full w-52'></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Screen</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
      
        <div className={'grid grid-cols-11 gap-3 px-4' +  (toage? '  ': ' hidden ' )}>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>
          <Seat></Seat>


        </div>
        <div className={'font-medium ' +  (toage? '  ': ' hidden ' )}>
          <p>Total seat picked : 7</p>
          <p className='text-xl font-semibold'>Total price : Rp 700.000</p>
        </div>
        <div className= {(toage? ' hidden ': '' )}>
          <p>Please submit your age</p>
          <Input type='number' placeholder='18' ></Input>
        </div>
        <div>
          <Button className={(toage? ' hidden ': '' )} onClick={()=>setToage(true)}>Back</Button>
          <Button variant="outline" onClick={() => setToage(!toage)} className= {(toage? '  ': ' hidden ' )}>Purcbhase</Button>
          <Button variant="outline" className= {(toage? ' hidden ': '' )}>Finish</Button>
        </div>
       
      </DialogContent>
    </Dialog>
  )
}


export default BookTicket