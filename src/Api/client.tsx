import axios from 'axios';
import { getCookie, removeCookie, setCookie } from './Cookies';
import { BASE_URL } from './ constants';
import logout from './logout';
import fetchAccess from './fetchAccess';

const ACCESS_HEADER_KEY = 'accessToken';
const REFRESH_HEADER_KEY = 'refreshToken';
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
  async (error) => {
    //console.log(error);
    if (error.response.status === 401) {
      if (error.response.data.includes('refresh')) {
        // refresh 토큰 만료, refresh 토큰 없음
        logout()
          .then(() => {
            console.log('로그아웃');
            removeCookie('refreshToken');
          })
          .then(() => {
            window.location.href = '/';
            console.log(
              'RefreshToken 만료로 로그아웃 합니다. 다시 로그인해주세요.'
            );
          });
      }
      if (error.response.data.includes('access')) {
        // 엑세스 토큰 만료, 없음
        await fetchAccess()
          .then(async (v) => {
            error.config.headers = {
              'Content-Type': 'application/json',
              accessToken: v.data,
            };
            localStorage.setItem('accessToken', v.data);
            const response = await axios.request(error.config);
            return response;
          })
          .then(() => {
            window.location.reload();
          });
      }
      if (error.response.data.includes('IP')) {
        logout()
          .then(() => {
            console.log('등록된 IP가 있어 로그아웃합니다.');
            removeCookie('refreshToken');
          })
          .then(() => {
            window.location.href = '/';
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
      //maxAge: 180,
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
    localStorage.setItem('accessToken', token);
    console.log('저장 완료');
  } else {
    delete client.defaults.headers.common[ACCESS_HEADER_KEY];
  }
};

export default client;
