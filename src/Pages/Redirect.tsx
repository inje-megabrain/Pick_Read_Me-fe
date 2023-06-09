import { useEffect } from 'react';
import { setAccessToken, setRefreshToken } from '../Api/client';
import { Link, useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
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
