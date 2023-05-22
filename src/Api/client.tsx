import axios from 'axios';
import { getCookie } from './Cookies';
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

client.interceptors.response.use((res) => {
  if (res.status === 200 && res.data) {
    const token = res.data as { accessToken?: string; refreshToken?: string };
    if (token.accessToken) {
      setAccessToken(token.accessToken);
      //쿠키 저장
    }
    if (token.refreshToken) {
      setRefreshToken(token.refreshToken);
      //쿠키 저장
    }
  }
  return res;
});

export const setRefreshToken = (token: string) => {
  if (token) {
    client.defaults.headers.common[
      REFRESH_HEADER_KEY
    ] = `${TOKEN_TYPE} ${token}`;
  } else {
    delete client.defaults.headers.common[REFRESH_HEADER_KEY];
  }
};

export const setAccessToken = (token: string) => {
  if (token) {
    client.defaults.headers.common[
      ACCESS_HEADER_KEY
    ] = `${TOKEN_TYPE} ${token}`;
  } else {
    delete client.defaults.headers.common[ACCESS_HEADER_KEY];
  }
};

// export default axios.create({
//   headers: {
//     accessToken: await getCookie('accessToken'),
//   },
// });

export default client;
