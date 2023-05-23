import { useEffect } from 'react';
import { setAccessToken, setRefreshToken } from '../Api/client';
import { Link } from 'react-router-dom';

const Redirect = () => {
  useEffect(() => {
    const param = new URLSearchParams(location.search);
    const access = param.get('accessToken');
    const refresh = param.get('refreshToken');
    if (access) {
      setAccessToken(access);
    }
    if (refresh) {
      setRefreshToken(refresh);
    }
  }, []);

  return (
    <>
      <h2>Redirect 페이지</h2>
    </>
  );
};

export default Redirect;
