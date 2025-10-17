import { Categories } from '../demo/data/categories'
import { Posts } from '../demo/data/posts'
import { Comments } from '../demo/data/comments'
import { Users } from '../demo/data/users'

export type TConfig = {
    db: Map<string, unknown>
}

const db: Map<string, unknown> = new Map()
db.set('categories', Categories)
db.set('posts', Posts)
db.set('comments', Comments)
db.set('users', Users)

export const AppData: TConfig = {
    db
}

export function getData<TData>(table: string): TData[] {
    return AppData.db.get(table) as TData[]
}