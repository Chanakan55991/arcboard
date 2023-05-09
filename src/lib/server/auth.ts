import { connection } from './db'
import { planetscale } from '@lucia-auth/adapter-mysql'
import lucia from 'lucia-auth'
import { web } from 'lucia-auth/middleware'

const auth = lucia({
  adapter: planetscale(connection),
  env: 'DEV',
  middleware: web()
})

export default auth
export type Auth = typeof auth
