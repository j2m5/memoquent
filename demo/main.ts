import { Category } from './models/Category'

(function run() {
    const category = Category.find(2)

    console.log(category)
})()