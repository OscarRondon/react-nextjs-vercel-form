'use client'

import { Imput } from '@/componets/Inputs'
import { Button } from '@/componets/Button'
import { toast } from 'sonner'


export const Form = () => {

  const handleSubmit = (evnt: React.FormEvent<HTMLFormElement>) => {
    evnt.preventDefault()
    const form = evnt.currentTarget
    const formData = new FormData(form)
    // console.log(formData.get('email'))
    // console.log(formData.get('name'))
    // console.log(formData.get('message'))
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    const { email, name, message } = Object.fromEntries(formData.entries())

    fetch('/api/postgre-send-message', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Data saved on database')
      form.reset()
    }).catch(err => {
      console.error(err)
      toast.error('Not posible to save on database')
    })
  }



  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h2 className='mb-4 text-4xl font-bold tracking-tight text-center'>Contact with me</h2>
      <form onSubmit={handleSubmit} className='space-y-4 w-full max-w-md m-auto' action='#' method='POST'>
        <Imput id='email' name='email' label='Email' type='email' placeholder='Email@domain.com' />
        <Imput id='name' name='name' label='Name' type='text' placeholder='Oscar Rondon' />
        <Imput id='message' name='message' label='Your Message' type='text' placeholder='This is the message tha i want to send' />
        <Button>Send Message</Button>
      </form>
    </main>
  )

}
