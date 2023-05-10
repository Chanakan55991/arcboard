import auth from '$lib/server/auth'
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad, Actions } from './$types'

export const load: PageServerLoad = async ({ locals, parent }) => {
  const session = await locals.auth.validate()
  if (session) throw redirect(302, '/dashboard')
  return {}
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = await request.formData()
    const email = form.get('email')
    const password = form.get('password')
    const confirm_password = form.get('password-confirm')

    if (typeof email !== 'string' || typeof password !== 'string' || typeof confirm_password !== 'string') {
      return fail(400)
    }

    if (!email || !password || !confirm_password) {
      return fail(400, { code: 520, message: 'All fields are required' })
    }

    if (password !== confirm_password) {
      return fail(400, { code: 525, message: 'Confirmation password not matched' })
    }

    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: 'email',
          providerUserId: email,
          password
        },
        attributes: {
          email
        }
      })
      const session = await auth.createSession(user.userId)
      locals.auth.setSession(session)
    } catch {
      return fail(400, { code: 530, message: 'Email is already registered' })
    }
  }
}
