export interface IPost {
  content: string;
  id: number;
  member: Object;
  postCreatedAt: Date;
  postUpdatedAt: Date;
  post_like: number;
  repo: string;
  title: string;
}

export interface IMember {}
