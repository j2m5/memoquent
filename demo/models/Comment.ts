import { Model } from '@/Model'
import { IComment } from '@demo/types'
import { belongsTo } from '@/decorators'
import { Post } from '@demo/models/Post'
import { User } from '@demo/models/User'

class Comment extends Model<IComment> {
    protected table: string = 'comments'

    @belongsTo(() => Post, { foreignKey: 'postId' })
    declare public post: Post

    @belongsTo(() => User, { foreignKey: 'userId' })
    declare public user: User
}

export { Comment }