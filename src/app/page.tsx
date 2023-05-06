import { Imput } from '../componets/Inputs'
import { Button } from '../componets/Button'


export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h2 className='mb-4 text-4xl font-bold tracking-tight text-center'>Contact with me</h2>
      <form className='space-y-4 w-full max-w-md' action='https://formspree.io/f/xbjqkjwp' method='POST'>
        <Imput id='email' name='email' label='Email' type='email' placeholder='Email@domain.com' />
        <Imput id='name' name='name' label='Name' type='text' placeholder='Oscar Rondon' />
        <Imput id='message' name='message' label='Your Message' type='text' placeholder='This is the message tha i want to send' />
        <Button>Send Message</Button>
      </form>
    </main>
  )
}
