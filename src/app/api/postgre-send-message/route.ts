import { db } from '@vercel/postgres'

export async function POST (request: Request) {
  const client = await db.connect()

  const { name, email, message } = await request.json()

  if (name == null || email == null || message == null) {
    return new Response('Missing parameters', { status: 400 })
  }

  try {
    const { rows } = await client.sql`INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message})`
    console.log(rows)
    return new Response('Success', { status: 200 })
  } catch (e) {
    console.error(e)
    return new Response('Error: the data cannot be stored', { status: 500 })
  } finally {

    client.release()

  }

}



