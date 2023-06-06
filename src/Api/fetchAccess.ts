import client from './client';
import headerConfig from './headerconfig';
import { getCookie } from './Cookies';

export default function fetchAccess() {
  return new Promise<any>((resolve) => {
    client
      .get(`api/get/accessToken`, {
        headers: {
          ...headerConfig,
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((v) => {
        resolve(v);
        console.log(v);
        // localStorage.setItem('accessToken', v.data);
      })
      .catch((err) => {
        console.log('accessToken 재발급 에러 ' + err);
      });
  });
}
