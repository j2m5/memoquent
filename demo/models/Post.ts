import { Model } from '../../src/Model'
import { IPost } from '../types'
import { belongsTo, hasMany } from '../../src/decorators'
import { Category } from './Category'
import { User } from './User'
import { Comment } from './Comment'

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