import client from './client';
import { getCookie } from './Cookies';

export default function logout() {
  return new Promise((resolve) => {
    client
      .delete('api/logout', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log('delete Cookie 에러 : ' + err);
      });
  });
}
