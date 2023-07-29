import { useEffect, useState } from 'react';

export const useAccess = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.log('로그인 해주세요');
    } else {
      setToken(accessToken);
      console.log('로그인 됐엉');
    }
  }, []);

  return token;
};
