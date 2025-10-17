import { Model } from '@/Model'
import { IUser } from '../types'

class User extends Model<IUser> {
    protected table: string = 'users'
}

export { User }