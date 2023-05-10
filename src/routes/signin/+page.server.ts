import auth from '$lib/server/auth'
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad, Actions } from './$types'

export const load: PageServerLoad = async ({ locals, parent }) => {
  await parent()
  const session = await locals.auth.validate()
  if (session) throw redirect(302, '/dashboard')
  return {}
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = await request.formData()
    const email = form.get('email')
    const password = form.get('password')

    if (typeof email !== 'string' || typeof password !== 'string') {
      return fail(400)
    }

    try {
      const key = await auth.useKey('email', email, password)
      const session = await auth.createSession(key.userId)
      locals.auth.setSession(session)
    } catch {
      return fail(400, { code: 430, message: 'Username or Password is incorrect' })
    }
  }
}
