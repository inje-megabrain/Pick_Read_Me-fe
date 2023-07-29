import { getCookie } from './Cookies';
import client from './client';

const fetchReadme = (name: string) => {
  return new Promise<string>((resolve) => {
    client
      .get(`api/get/readmes?name=${name}`, {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
          refreshToken: getCookie('refreshToken'),
        },
      })
      .then((v) => {
        resolve(v.data);
        //console.log(v.data);
      })
      .catch((err) => {
        console.log('fetchReadme 에러 ' + err);
      });
  });
};
export default fetchReadme;
