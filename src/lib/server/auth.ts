import { connection } from './db'
import { planetscale } from '@lucia-auth/adapter-mysql'
import lucia from 'lucia-auth'
import { sveltekit } from 'lucia-auth/middleware'

const auth = lucia({
  adapter: planetscale(connection),
  env: 'DEV',
  middleware: sveltekit(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      email: userData.email
    }
  }
})

export default auth
export type Auth = typeof auth
