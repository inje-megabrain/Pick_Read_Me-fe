import { useEffect } from 'react';
import { getCookie } from '../Api/Cookies';
import { useNavigate } from 'react-router-dom';

export const useRefresh = () => {
  const refresh = getCookie('refreshToken');
  const navigate = useNavigate();
  useEffect(() => {
    if (!refresh) {
      console.log('토큰 만료');
      localStorage.removeItem('accessToken');
      navigate('/');
    }
  }, []);
};
