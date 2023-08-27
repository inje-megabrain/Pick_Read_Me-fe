import { getCookie } from './Cookies';
import client from './client';
import { IPost } from '../Types/posts';

const fetchMyPost = () => {
  return new Promise((resolve) => {
    client
      .get(`api/get/searchMyPosts`, {
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
        console.log('fetchMyPost 에러 ' + err);
      });
  });
};

export default fetchMyPost;
