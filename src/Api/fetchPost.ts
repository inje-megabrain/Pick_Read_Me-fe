import { resolve } from 'webpack.config';
import client from './client';

const fetchPost = () => {
  return new Promise((resolve) => {
    client
      .get(`api/get/all/posts`)
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
