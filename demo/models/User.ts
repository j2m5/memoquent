import { Model } from '@/Model'
import { IUser } from '@demo/types'

class User extends Model<IUser> {
    protected table: string = 'users'
}

export { User }