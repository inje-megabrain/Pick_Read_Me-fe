import client from './client';
import { getCookie } from './Cookies';
import { IPost } from '../Types/posts';

const fetchPostById = (id: number) => {
  return new Promise((resolve) => {
    client
      .get(`api/get/detail/post?post_id=${id}`, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((v) => {
        resolve(v.data);
        console.log(v.data);
      })
      .catch((err) => {
        console.log('fetchPostById 에러 ' + err);
      });
  });
};

export default fetchPostById;
