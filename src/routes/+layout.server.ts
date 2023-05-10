import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  const { user } = await locals.auth.validateUser()
  if (user && user.email) {
    return { user }
  } else {
    return { user: null }
  }
}

