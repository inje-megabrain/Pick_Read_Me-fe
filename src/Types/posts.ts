export interface IPost {
  content: string;
  id: number;
  memberName: string;
  //postCreatedAt: Date;
  postUpdatedAt: Date;
  post_like: number;
  repo: string;
  title: string;
  pageNumber: number;
  pageSize: number;
}

export interface IMember {}
