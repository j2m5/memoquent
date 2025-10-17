import { Model } from '@/Model'
import { IComment } from '../types'
import { belongsTo } from '@/decorators'
import { Post } from './Post'
import { User } from './User'

class Comment extends Model<IComment> {
    protected table: string = 'comments'

    @belongsTo(() => Post, { foreignKey: 'postId' })
    declare public post: Post

    @belongsTo(() => User, { foreignKey: 'userId' })
    declare public user: User
}

export { Comment }