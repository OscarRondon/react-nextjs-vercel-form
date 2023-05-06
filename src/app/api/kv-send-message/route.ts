import kv from '@vercel/kv'

export async function POST (request: Request) {
  const { name, email, message } = await request.json()

  if (name == null || email == null || message == null) {
    return new Response('Missing parameters', { status: 400 })
  }

  const uuid = crypto.randomUUID()
  const timeStamp = Date.now()

  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timeStamp })
    return new Response('Success', { status: 200 })
  } catch (e) {
    console.error(e)
    return new Response('Error: the data cannot be stored', { status: 500 })
  }

}



