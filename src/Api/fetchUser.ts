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
      .get(`/get/members`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((v) => {
        resolve(v.data);
      })
      .catch((err) => {
        console.log('fetchUser 에러 ' + err);
      });
  });
}
