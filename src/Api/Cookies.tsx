import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (...args: Parameters<(typeof cookies)['set']>) => {
  return cookies.set(...args);
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
