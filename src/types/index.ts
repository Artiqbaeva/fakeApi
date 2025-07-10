export interface IUsers{
    id: number,
    name: string,
    username: string,
    phone: number
}
export interface ITodos{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export interface IPhotos{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
export interface IAlbums{
    userId: number,
    id: number,
    title: string
}
export interface IComments{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
export interface IPosts{
    userId: number,
    id: number,
    title: string,
    body: string
}