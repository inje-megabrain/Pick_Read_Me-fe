export interface IPost {
  content: string;
  id: number;
  owner: string;
  post_like: number;
  repo: string;
  title: string;
  nowPage: number;
  totalPage: number;
  create_time: Date;
  update_time: Date;
}

export interface IMember {}
