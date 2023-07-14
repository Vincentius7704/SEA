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

const Order = () => {
    const [history , setHistory] = useState([])
    console.log('haha')
    {/* take data from user collection*/}
    useEffect(() => {
      client.collection('order').getFullList().then((res) => {
        setHistory(res)
        
      },[])
    })
    function deleteHistory(id : string){
      client.collection('order').delete(id)
   
    }
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
                 {/* map user collection into tabble */}
                {history.map(({status , movie_title ,seat_number , cost , id}) => (
                  <TableRow key={id}>
                    <TableCell className="font-medium">
                      {/* cancelable order */}
                      { status?
                      <Dialog>
                        <Menubar>
                          <MenubarMenu >
                            <MenubarTrigger className='cursor-pointer hover:scale-1.2 text-[11px] md:w-full md:text-xs  border-[2px] border-red-600 rounded-xl'>Cancel</MenubarTrigger>
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
                            <Button type="submit" onClick = {()=> deleteHistory(id)}>Confirm</Button>
                          
                          </DialogFooter>
                        </DialogContent>
                      </Dialog> : <div>Order cant be cancelled</div>}
                    </TableCell>
                    <TableCell>{movie_title}</TableCell>
                    <TableCell>{seat_number}</TableCell>
                    <TableCell className="text-center">{cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </SheetContent>
      </Sheet>
  )
}

export default Order