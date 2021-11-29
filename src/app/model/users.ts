export interface Users {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  }
}
