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
import Topup from './Topup'
import Order from './Order'
import Withdraw from './Withdraw'



import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export const BalanceBar = () => {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    client.collection('user').getFullList().then((res) => {
      setBalance(res[0].balance)
      console.log(res, res[0].id)
    })
  }, [])
  return (
    
   
    <div className='flex justify-center w-screen mt-40 '>
      <div className='flex flex-col justify-between w-9/12 h-40 mx-10 md:h-56 md:w-2/5 md:mx-40 bg-gradient-to-br from-blue-950 to-cyan-300 rounded-3xl'>
        {/** Balance bar */}
        <div className='flex flex-col px-5 py-5'>
          <h1 className='text-lg md:text-2xl'>My Balance</h1>
          <p className='text-2xl font-semibold md:text-5xl'>Rp {balance}</p>
        </div>

        {/** Button List  */}
        <ul className='flex justify-between px-10 py-3 text-[10px] md:py-5 md:text-lg '>
          <Topup></Topup>
          
          <Withdraw></Withdraw>
          
          <History></History>
         
          <Order></Order>
        </ul>
      </div>
    </div>
  
  )
}





export function History() {
  return (
    <Sheet>
      <SheetTrigger>
        <li className='flex flex-col items-center cursor-pointer jusify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
          </svg>

          <p>History</p>
        </li>
      </SheetTrigger>

      <SheetContent side='bottom'>
        <SheetHeader>
          <SheetTitle>Transaction History</SheetTitle>
          <SheetDescription>Display all the successful transaction</SheetDescription>
        </SheetHeader>

        <ScrollArea className='w-full mt-10 overflow-y-auto h-96 '>
          <Table>
            <TableHeader className='sticky text-[11px]'>
              <TableRow>
                <TableHead>Booker</TableHead>
                <TableHead>Movie Title</TableHead>
                <TableHead>Seat Numbers</TableHead>
                <TableHead className='text-center'>Total Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-center">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
        <div className='h-[50vw] md:h-[0vw]'></div>
      </SheetContent>
    </Sheet>
  )
}



const Home = () => {



  return (
    <div className='z-0 flex justify-center w-screen h-screen -mt-6 text-white md:h-screen'>
      <UniNavbar></UniNavbar>
      <BalanceBar></BalanceBar>

      {/*  <div className='fixed bottom-0 flex flex-col items-center w-full gap-5 mx-auto shadow-inner h-5/12 top-1/3 '>
          
  </div> */}
    </div>
  )
}

export default Home