import axios, { AxiosResponse } from 'axios';
import { getCookie, setCookie } from './Cookies';
import { BASE_URL } from './ constants';
import logout from './logout';
import fetchAccess from './fetchAccess';

const ACCESS_HEADER_KEY = 'Authorization';
const REFRESH_HEADER_KEY = 'AuthorizationSecret';
const TOKEN_TYPE = 'Bearer';

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

client.interceptors.request.use((req) => {
  return req;
});

client.interceptors.response.use(
  (res) => {
    if (res.status === 200 && res.data) {
      const token = res.data as { accessToken?: string; refreshToken?: string };
      if (token.accessToken) {
        setAccessToken(token.accessToken);
      }
      if (token.refreshToken) {
        setRefreshToken(token.refreshToken);
      }
    }
    return res;
  },
  (error) => {
    //console.log(error);
    if (error.response.status === 401) {
      if (error.response.data.includes('만료')) {
        //"리프레시 토큰 만료" , 엑세스, 리프레시 둘 다 없음
        localStorage.clear();
        window.location.reload();
        //logout().then(() => console.log('로그아웃'));
      }
      if (error.response.data.includes('IP')) {
        logout()
          .then(() => console.log('등록된 IP가 있어 로그아웃합니다.'))
          .then(() => {
            window.location.reload();
          });
      }
      if (error.response.data.includes('Expired')) {
        localStorage.removeItem('accessToken');
        fetchAccess()
          .then((v) => {
            localStorage.setItem('accessToken', v.data);
          })
          .then(() => {
            window.location.reload();
          });
      }
    }

    return Promise.reject(error);
  }
);

export const setRefreshToken = (token: string) => {
  if (token) {
    client.defaults.headers.common[
      REFRESH_HEADER_KEY
    ] = `${TOKEN_TYPE} ${token}`;
    //쿠키 저장
    setCookie('refreshToken', `${token}`, {
      path: 'http://52.78.80.150:9000',
      //path: '/',
      //httpOnly: true,
      maxAge: 14 * 24 * 60 * 60,
      sameSite: 'none',
      secure: true,
    });
  } else {
    delete client.defaults.headers.common[REFRESH_HEADER_KEY];
  }
};

export const setAccessToken = (token: string) => {
  if (token) {
    client.defaults.headers.common[
      ACCESS_HEADER_KEY
    ] = `${TOKEN_TYPE} ${token}`;
    //LocalStorage 저장
    window.localStorage.setItem('accessToken', token);
  } else {
    delete client.defaults.headers.common[ACCESS_HEADER_KEY];
  }
};

export default client;
