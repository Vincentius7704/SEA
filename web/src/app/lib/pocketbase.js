import Pocketbase from 'pocketbase'

export const client = new Pocketbase('http://127.0.0.1:8090')

export async function updateBalance(amount , id){
  const data = {balance: amount}
  await client.collection('user').update('y071hpz8gz0dcly', data)
}

export async function createHistory(){}