import { getCookie } from './Cookies';
import client from './client';

export type IUser = {
  email: string;
  name: string;
  profile: string;
  repo: string;
};

export default function fetchUsers() {
  return new Promise<IUser>((resolve) => {
    client
      .get(`api/get/members`, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((v) => {
        resolve(v.data);
      })
      .catch((err) => {
        console.log('fetchUser 에러 ' + err);
        console.log('accessToken: ' + localStorage.getItem('accessToken')); //null
        console.log(
          'header : ' + client.defaults.headers.common['accessToken'] //잘뜸..
        );
      });
  });
}
