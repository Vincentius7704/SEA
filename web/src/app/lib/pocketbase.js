import Pocketbase from 'pocketbase'
import { useQuery } from '@tanstack/react-query'

export const client = new Pocketbase('http://127.0.0.1:8090')

export async function updateBalance(amount , id){
  const data = {balance: amount}
  await client.collection('user').update('y071hpz8gz0dcly', data)
}

export function useBalance(){
  const id = 'y071hpz8gz0dcly'
  async function getBalance(args){
      console.log(args)
  }
  return useQuery({queryFn: getBalance , queryKey : ['get_balance' , id]})
}