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

import { client } from '../lib/pocketbase'
import { useEffect , useState } from 'react'


export const BalanceBar = () => {
  return (
    <div className='flex justify-center w-screen mt-40 '>
      <div className='flex flex-col justify-between w-9/12 h-40 mx-10 md:h-56 md:w-2/5 md:mx-40 bg-gradient-to-br from-blue-950 to-cyan-300 rounded-3xl'>
        {/** Balance bar */}
        <div className='flex flex-col px-5 py-5'>
          <h1 className='text-lg md:text-2xl'>My Balance</h1>
          <p className='text-2xl font-semibold md:text-5xl'>Rp. 500.000</p>
        </div>

        {/** Button List  */}
        <ul className='flex justify-between px-10 py-3 text-[10px] md:py-5 md:text-lg '>
          <TopUp></TopUp>
          <Separator orientation='vertical' className='bg-black'></Separator>
          <Withdraw></Withdraw>
          <Separator orientation='vertical'></Separator>
          <History></History>
          <Separator orientation='vertical'></Separator>
          <CancelOrder></CancelOrder>
        </ul>
      </div>
    </div>
  )
}

function TopUp() {
  return (
    <Sheet >
      <SheetTrigger>
        <li className='flex flex-col items-center cursor-pointer jusify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className=''>Top Up</p>
        </li >
      </SheetTrigger>
      <SheetContent side='bottom' className='h-4/6'>
        <SheetHeader>
          <SheetTitle>
            Top Up
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader >

        <div className='w-10/12 '>
          <p className=''>Masukan jumlah</p>
          <div className='flex flex-col items-start gap-5 mt-4 md:flex-row'>
            <Input type='number' placeholder='500000' className='md:max-w-3xl'></Input>
            <button className='w-32 px-3 py-1 font-semibold text-white rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 h-fit'>Top-Up!</button>
          </div>
        </div>
        <div className='h-60'></div>

      </SheetContent>
    </Sheet>
  )
}

function Withdraw() {
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
          <SheetDescription>Withdraw minimal 500.000</SheetDescription>
        </SheetHeader>
        <div className='w-10/12 '>
          <p className=''>Masukan jumlah</p>
          <div className='flex items-center gap-5 mt-4'>
            <Input type='number' placeholder='500000' className='md:max-w-4xl'></Input>
            <button className='px-3 py-1 font-semibold text-white rounded-full bg-gradient-to-r from-red-700 to-cyan-600 w-fit h-fit'>Withdraw</button>
          </div>
        </div>
        <div className='h-60'></div>

      </SheetContent>
    </Sheet>
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

function CancelOrder() {
  return (
    <Sheet>
      <SheetTrigger>
        <li className='flex flex-col items-center cursor-pointer jusify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          <p>Cancel Order</p>
        </li>
      </SheetTrigger>
      <SheetContent side='bottom' className='overflow-y-auto h-4/6'>
        <SheetHeader className=''>
          <SheetTitle>Your Order List</SheetTitle>
          <SheetDescription>Click on the status coloumn to cancel</SheetDescription>
        </SheetHeader>
        <ScrollArea>
          <Table>
            <TableHeader className='sticky text-[11px] md:text-xs'>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Movie Title</TableHead>
                <TableHead>Seat Numbers</TableHead>
                <TableHead className='text-center'>Total Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='text-[11px] md:text-xs'>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    <Dialog>
                      <Menubar>
                        <MenubarMenu>
                          <MenubarTrigger className='cursor-pointer hover:scale-1.2 text-[11px] md:w-full md:text-xs'>Not Cancelled</MenubarTrigger>
                          <MenubarContent>
                            <DialogTrigger asChild>
                              <MenubarItem>Cancel</MenubarItem>
                            </DialogTrigger>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                      <DialogContent className=''>
                        <DialogHeader>
                          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. Are you sure you want to permanently
                            delete this order from our servers?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className='gap-2'>
                          <Button type="submit">Confirm</Button>
                          <Button type="submit" className='transition duration-300 bg-green-500 hover:scale-110 hover:bg-green-300'>No , i want my order</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-center">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

const Home = () => {
  const [balance  , setBalance] = useState(0)
  useEffect(()=>{
    client.collection('')
  },[])
  
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