export interface IPost {
  content: string;
  create_time: Date;
  id: number;
  owner: string;
  post_like: number;
  repo: string;
  title: string;
  update_time: Date;
  svgUrl?: string;
}

export interface PageInfo {
  content: Array<IPost>;
  countContent: number;
  nowPage: number;
  totalPage: number;
}
