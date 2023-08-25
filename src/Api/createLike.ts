import client from './client';
import { getCookie } from './Cookies';

export default function createLike(postId: number) {
  return new Promise((resolve) => {
    client
      .post(`/api/like/posts?post_id=${postId}`, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((v) => {
        resolve(v);
      })
      .catch((error) => {
        console.log('createLike 에러 ' + error);
      });
  });
}
