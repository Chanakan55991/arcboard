import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'

import { DATABASE_URL } from '$env/static/private'

const connection = connect({
  url: DATABASE_URL
})

const db = drizzle(connection)

export { connection }
export default db
