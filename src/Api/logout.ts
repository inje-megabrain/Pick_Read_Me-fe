import client from './client';

export default function logout() {
  return new Promise((resolve) => {
    client
      .delete('api/delete/cookie')
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log('delete Cookie 에러 : ' + err);
      });
  });
}
