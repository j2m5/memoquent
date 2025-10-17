import { Model } from '../../src/Model'
import { IUser } from '../types'
import { hasMany } from '../../src/decorators'
import { Post } from './Post'
import { Comment } from './Comment'

class User extends Model<IUser> {
    protected table: string = 'users'

    @hasMany(() => Post, { foreignKey: 'userId' })
    declare public posts: Post[]

    @hasMany(() => Comment, { foreignKey: 'userId' })
    declare public comments: Comment[]
}

export { User }