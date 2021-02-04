export interface IPost {
  _id: string,
  name: string,
  title: string,
  content: string,
  dateAdded: string,
  slug: string,
  cuid: string,
  image_url: string,
  user_id: string,
};

export interface IPage {
  count: number
  next: string
  pages: number
  prev: string | null
}

export interface IAuth {
  user: {
    id: string,
    email: string,
    favorites: string[]
  } | null,
  authorized: boolean,
  message: string,
  error: any,
  token: string | null,
}