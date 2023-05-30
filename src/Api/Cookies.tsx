import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// export const setCookie = (...args: Parameters<(typeof cookies)['set']>) => {
//   console.log('+', ...args);
//   return cookies.set(...args);
// };

export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
