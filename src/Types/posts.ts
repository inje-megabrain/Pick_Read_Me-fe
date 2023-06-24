export interface IPost {
  content: string;
  id: number;
  memberName: string;
  //postCreatedAt: Date;
  postUpdatedAt: Date;
  post_like: number;
  repo: string;
  title: string;
}

export interface IMember {}
