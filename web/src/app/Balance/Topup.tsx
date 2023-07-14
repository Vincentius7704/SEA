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


const Topup = () => {
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
  function topup() {
    refreshPage()
    updateBalance(Number(balance) - Number(Tbalance), id)

  }
  useEffect(() => {
    client.collection('user').getFullList().then((res) => {
      setBalance(res[0].balance)
      setId(res[0].id)
      console.log(res[0].id)
    })
  })

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
          <SheetDescription> Your current balance is {balance}</SheetDescription>
        </SheetHeader >

        <div className='w-10/12 '>
          <p className=''>Masukan jumlah</p>
          <div className='flex flex-col items-start gap-5 mt-4 md:flex-row'>
            <Input type='number' placeholder='500000' className='md:max-w-3xl' onChange={(e) => makeValue(e)}></Input>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className='w-32 px-3 py-1 font-semibold text-white rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 h-fit' >Top-Up!</button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirmation</DialogTitle>
                  <DialogDescription className='text-black'>Are you sure want to top up Rp {Tbalance} for this account?</DialogDescription>

                  <Button
                    onClick={topup}
                    type="submit" className='transition duration-300 bg-green-500 hover:scale-110 hover:bg-green-300'>Confirm</Button>

                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className='h-60'></div>

      </SheetContent>
    </Sheet>
  )
}

export default Topup