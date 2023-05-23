import React from 'react';
import MyPage from './MyPage';
import { Link, useNavigate } from 'react-router-dom';

const Main = () => {
  let navigate = useNavigate();
  const handleMyPage = () => {
    navigate('/mypage');
  };
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <div>Main페이지임니당</div>
      <br />
      <button onClick={handleMyPage}>MyPage로 가기</button>
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
    </>
  );
};

export default Main;
