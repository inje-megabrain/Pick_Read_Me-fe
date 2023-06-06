import { getCookie } from './Cookies';
import client from './client';
import headerConfig from './headerconfig';

export type IUser = {
  email: string;
  name: string;
  profile: string;
  repo: string;
};

export default function fetchUsers() {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = getCookie('refreshToken');
  return new Promise<IUser>((resolve) => {
    client
      .get(`api/get/members`, {
        headers: {
          ...headerConfig,
          accessToken: `${accessToken}`,
          refreshToken: `${refreshToken}`,
          //'X-Requested-With': 'XMLHttpRequest',
          //accessToken: `Bearer ${accessToken}`,
          // refreshToken: `Bearer ${refreshToken}`,
        },
        withCredentials: true,
      })
      .then((v) => {
        resolve(v.data);
      })
      .catch((err) => {
        console.log('fetchUser 에러 ' + err);
      });
  });
}
