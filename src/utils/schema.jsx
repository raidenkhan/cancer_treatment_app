import {sql} from 'drizzle-orm'
import {integer,varchar,pgTable,serial,text} from 'drizzle-orm/pg-core'
export const Users=pgTable('Users',{
    id:serial('id').primaryKey(),
    username:varchar('username').notNull(),
    age:integer('age').notNull(),
    location:varchar('location').notNull(),
    createdBy:varchar('created_by').notNull()
})
export const Records=pgTable('Records',{
    id:serial('id').primaryKey(),
    userId:integer('user_id').references(()=>Users.id).notNull(),
    recordName:varchar('record_name').notNull(),
    anaylysesResult:varchar('analyses_result').notNull(),
    kanbanRecords:varchar('kanban_records').notNull(),
    createdBy:varchar('created_by').notNull()

})
