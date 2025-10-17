import { Model } from '../../src/Model'
import { ICategory } from '../types'
import { hasMany } from '../../src/decorators'
import { Post } from './Post'

class Category extends Model<ICategory> {
    protected table: string = 'categories'

    @hasMany(() => Post, { foreignKey: 'categoryId' })
    declare public posts: Post[]
}

export { Category }