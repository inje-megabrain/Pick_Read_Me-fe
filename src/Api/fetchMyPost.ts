import client from './client';
import { IPost } from 'src/Types/posts';

const fetchMyPost = () => {
  return new Promise<IPost[]>((resolve) => {
    client
      .get(`api/get/searchMyPosts`)
      .then((v) => {
        resolve(v.data);
        console.log(v.data);
      })
      .catch((err) => {
        console.log('fetchMyPost 에러 ' + err);
      });
  });
};

export default fetchMyPost;
