import axios from 'axios';
import { setCookie } from './Cookies';
import { BASE_URL } from './ constants';

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
    if (
      error.response.status === 401 &&
      error.response.data.error.includes('만료')
    ) {
      console.log('얍 ' + error);
      localStorage.clear();
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
      //expires: new Date(new Date().valueOf() + 1000 * 60 * 60 * 24 * 3),
      maxAge: 180,
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
