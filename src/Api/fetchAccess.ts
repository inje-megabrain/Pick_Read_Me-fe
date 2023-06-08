import client from './client';
import { getCookie } from './Cookies';

export default function fetchAccess() {
  return new Promise<any>((resolve) => {
    client
      .get(`api/get/accessToken`, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((v) => {
        resolve(v);
        console.log(v);
      })
      .catch((err) => {
        console.log('accessToken 재발급 에러 ' + err);
        console.log(localStorage.getItem('accessToken'));
      });
  });
}
