import { useEffect } from 'react';
import { setAccessToken, setRefreshToken } from '../Api/client';
import { Link, useNavigate } from 'react-router-dom';
import { setCookie } from '../Api/Cookies';

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const param = new URLSearchParams(location.search);
    const access = param.get('accessToken');
    const refresh = param.get('refreshToken');
    if (access) {
      setAccessToken(access);
      localStorage.setItem('accessToken', access);
    }
    if (refresh) {
      setRefreshToken(refresh);
      setCookie('refreshToken', refresh);
    }
    navigate('/');
  }, []);

  return (
    <>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Redirect 페이지
      </button>
    </>
  );
};

export default Redirect;
