Небольшая смешная библиотека, работающая по принципам схожим с Eloquent ORM в Laravel

Позволяет преобразовывать массивы данных в JSON-формате или в виде обычных массивов JavaScript в модели и коллекции с которыми впоследствии проще работать

Использует билдер запросов чтобы фильтровать данные, поддерживает механизм отношений между сущностями

На данный момент имеется 3 типа отношений - HasOne, HasMany, BelongsTo

Пример конфигурации с привязкой данных

```
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
```

Пример модели

```
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
```

Пример использования

```
import { Category } from './models/Category'
import { Post } from './models/Post'
import { User } from './models/User'

const category = Category.withRelations('posts').find(2)?.toJSON()

const posts = Post.query().with('comments', 'user').where({'categoryId': 2}).get().toJSON()

const users = User.query().with('posts', 'comments').get().toJSON()

console.log(category)

console.log(posts)

console.log(users)
```
Полный пример работы с библиотекой в папке demo
