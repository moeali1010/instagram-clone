export interface UsersPosts {
  id?: {
    name?: string
    value?: string
  },
  gender?: string,
  name?: {
    title?: string,
    first?: string,
    last?: string
  },
  picture?: {
    large?: string,
    medium?: string,
    thumbnail?: string,
  }
  description:string,
  like: boolean,
  comments: any
}
