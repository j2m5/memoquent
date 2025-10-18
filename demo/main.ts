import { Category } from './models/Category'
import { Post } from './models/Post'
import { User } from './models/User'

const category = Category.withRelations('posts').find(2)?.toJSON()

const posts = Post.query().with('comments', 'user').where({'categoryId': 2}).get().toJSON()

const users = User.query().with('posts', 'comments').get().toJSON()

console.log(category)

console.log(posts)

console.log(users)