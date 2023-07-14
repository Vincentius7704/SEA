"use client"
import React from 'react'
import UniNavbar from '../UniNavbar'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from '@radix-ui/react-scroll-area'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

import { client, updateBalance } from '../lib/pocketbase'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Withdraw = () => {
    const [balance, setBalance] = useState(0)
    const [Tbalance, setTbalance] = useState(0)
    const [id, setId] = useState('')
    const refreshPage = () => {
      window.location.reload();
    }
    function makeValue(e: any) {
      {/*update  top up input */ }
      setTbalance(e.target.value)
  
      console.log("the balance is changing to", Number(balance) + Number(Tbalance))
    }
    function withdraw() {
      refreshPage()
      updateBalance(Number(balance) - Number(Tbalance), id)
  
    }
    function Warning() {
      return(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>)
  
    }
   useEffect(() => {
      client.collection('user').getFullList().then((res) => {
        setBalance(res[0].balance)
        setId(res[0].id)
   
      })
    } )
    return (
      <Sheet>
        <SheetTrigger>
          <li className='flex flex-col items-center cursor-pointer jusify-center md:flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
            </svg>
            <p>Withdraw</p>
          </li>
        </SheetTrigger>
  
        <SheetContent side='bottom' className='h-4/6'>
          <SheetHeader>
            <SheetTitle>Withdraw</SheetTitle>
            <SheetDescription>Maximal withdraw is 500.000</SheetDescription>
          </SheetHeader>
          <div className='w-10/12 '>
            <p className=''>Masukan jumlah</p>
            <div className='flex flex-col gap-5 mt-4'>
              <Input type='number' placeholder='500000' className='md:max-w-4xl' onChange={(e) => makeValue(e)}></Input>
              <div className='flex flex-col justify-start text-xs text-red-500'>
                <p className={'flex items-center gap-2 ' + (balance<=0? '': ' hidden ')}><Warning ></Warning> Your balance is 0 , please top up first</p>
                <p className={'flex items-center gap-2' + (Tbalance>500000? '' : ' hidden ' )}><Warning ></Warning>Maximum withdraw is 500000</p>
                <p className={'flex items-center gap-2' + (Tbalance>balance? '' : ' hidden ' )}><Warning ></Warning>Your withdraw exceed your balance</p>
                <p className={'flex items-center gap-2' + (Tbalance<1? '' : ' hidden ' )}><Warning ></Warning>Please input value for withdraw</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className={'px-3 py-1 font-semibold text-white rounded-full bg-gradient-to-r from-red-700 to-cyan-600 w-fit h-fit' +
                    (balance<=0 || Tbalance>500000 || Tbalance>balance || Tbalance<1 ? ' hidden ' : ' ')
                    }>Withdraw</button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure want to continue?</DialogTitle>
                    <DialogDescription className='text-start'>Amount withdraw :Rp {Tbalance} <br /> Current balance :Rp {balance}</DialogDescription>
                  </DialogHeader>
                  <Button className='bg-green-500' onClick={withdraw}>Continue</Button>
  
                </DialogContent>
              </Dialog>
              <button
                    className={'px-3 py-1 font-semibold text-white rounded-full bg-gradient-to-r from-red-700 to-cyan-600 w-fit h-fit disabled ' +
                    (balance<=0 || Tbalance>500000 || Tbalance>balance || Tbalance<1 ? ' opacity-60  ' : ' hidden ')
                    }>Withdraw</button>
            </div>
          </div>
  
  
        </SheetContent>
      </Sheet>
  )
}

export default Withdraw