export interface ICategory {
    id: number
    parentId: number | null
    name: string
}

export interface IPost {
    id: number
    categoryId: number
    userId: number
    title: string
    partialContent: string | null
    fullContent: string
}

export interface IComment {
    id: number
    postId: number
    userId: number
    text: string
}

export interface IUser {
    id: number
    email: string
    name: string
    password: string
}