import { resolve } from 'webpack.config';
import client from './client';
import { IPost } from 'src/Types/posts';

const fetchPost = (page = 1) => {
  return new Promise<IPost[]>((resolve) => {
    client
      .get(`api/get/infinite/posts?page_number=${page}`)
      .then((v) => {
        resolve(v.data);
        console.log(v.data);
      })
      .catch((err) => {
        console.log('fetchPost 에러 ' + err);
      });
  });
};

export default fetchPost;
