import { BASE_URL } from './ constants';
import { getCookie } from './Cookies';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = getCookie('refreshToken');
const headerConfig = {
  'Content-Type': 'application/json',
  //'Access-Control-Allow-Origin': 'http://localhost:3000',
  // accessToken: `Bearer ${accessToken}`,
  // refreshToken: `Bearer ${refreshToken}`,
};

export default headerConfig;
