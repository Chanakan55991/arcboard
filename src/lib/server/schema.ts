import { bigint, boolean, mysqlTable, tinyint, varchar } from 'drizzle-orm/mysql-core'

export const auth_user = mysqlTable('auth_user', {
  id: varchar('id', { length: 15 }).primaryKey().notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  is_admin: boolean('is_admin').notNull().default(false)
})

export const auth_session = mysqlTable('auth_session', {
  id: varchar('id', { length: 127 }).primaryKey().notNull(),
  user_id: varchar('user_id', { length: 15 }).notNull(),
  active_expires: bigint('active_expires', { mode: 'number' }).notNull(),
  idle_expires: bigint('idle_expires', { mode: 'number' }).notNull()
})

export const auth_key = mysqlTable('auth_key', {
  id: varchar('id', { length: 255 }).primaryKey().notNull(),
  user_id: varchar('user_id', { length: 15 }).notNull(),
  primary_key: tinyint('primary_key').notNull(),
  hashed_password: varchar('hashed_password', { length: 255 }),
  expires: bigint('expires', { mode: 'number' })
})
