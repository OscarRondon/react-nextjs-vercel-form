import kv from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {

  try {
    const keys = await kv.keys('contact-*')
    const messages = await kv.mget(...keys)
    return NextResponse.json(messages)
  } catch (e) {
    console.error(e)
    return new Response('Error: the data cannot be readed', { status: 500 })
  }

}



