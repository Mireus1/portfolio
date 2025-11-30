export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, message, company } = data || {}

    // Honeypot: if company filled, treat as bot
    if (company) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // TODO: integrate with email provider (SendGrid, Mailgun, Vercel Email) or persist to DB.
    // For now, log to server console so deploy logs will show messages.
    console.log('Contact form submission:', { name, email, message })

    return new Response(
      JSON.stringify({ ok: true, message: 'Message received' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('Contact API error', err)
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
