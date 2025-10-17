import { Model } from '@/Model'
import { IPost } from '@demo/types'
import { belongsTo, hasMany } from '@/decorators'
import { Category } from '@demo/models/Category'
import { User } from '@demo/models/User'
import { Comment } from '@demo/models/Comment'

class Post extends Model<IPost> {
    protected table: string = 'posts'

    @belongsTo(() => Category, { foreignKey: 'categoryId' })
    declare public category: Category

    @belongsTo(() => User, { foreignKey: 'userId' })
    declare public user: User

    @hasMany(() => Comment, { foreignKey: 'postId' })
    declare public comments: Comment[]
}

export { Post }