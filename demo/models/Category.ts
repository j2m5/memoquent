import { Model } from '@/Model'
import { ICategory } from '@demo/types'
import { hasMany } from '@/decorators'
import { Post } from '@demo/models/Post'

class Category extends Model<ICategory> {
    protected table: string = 'categories'

    @hasMany(() => Post, { foreignKey: 'categoryId' })
    declare public posts: Post[]
}

export { Category }