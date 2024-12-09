import {neon} from '@neondatabase/serverless'
import {drizzle} from 'drizzle-orm/neon-http'
import * as schema from './schema'
const sql=neon(
    "postgresql://breastcancer_owner:SluDX3JjTAE5@ep-green-tree-a5cpmbgr.us-east-2.aws.neon.tech/breast_cancer?sslmode=require"
)
export const db=drizzle(sql,{schema})