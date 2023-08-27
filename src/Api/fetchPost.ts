import { resolve } from 'webpack.config';
import client from './client';
import { IPost } from 'src/Types/posts';

interface Props {
  page: number;
}

const fetchPost = ({ page }: Props) => {
  return new Promise<IPost[]>((resolve) => {
    client
      .get(`api/get/infinity/posts?page_number=${page}`)
      .then((v) => {
        resolve(v.data);
        console.log('현재 페이지 : ', page);
      })
      .catch((err) => {
        console.log('fetchPost 에러 ' + err);
      });
  });
};

export default fetchPost;
