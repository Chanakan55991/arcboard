import { redirect, type Handle } from '@sveltejs/kit'
import auth from '$lib/server/auth'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event)
  const { session } = await event.locals.auth.validateUser()

  if (event.url.pathname.startsWith('/dashboard')) {
    if (!session) {
      throw redirect(303, '/signin')
    }
  }

  return await resolve(event)
}
