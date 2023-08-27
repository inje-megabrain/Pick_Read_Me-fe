import { resolve } from 'webpack.config';
import client from './client';
import { IPost } from 'src/Types/posts';

interface Props {
  page: number;
}

const fetchPostRank = ({ page }: Props) => {
  return new Promise<IPost[]>((resolve) => {
    client
      .get(`api/get/like/infinity?page_number=${page}`)
      .then((v) => {
        resolve(v.data);
        console.log('현재 페이지 : ', page);
      })
      .catch((err) => {
        console.log('fetchPostRank 에러 ' + err);
      });
  });
};

export default fetchPostRank;
