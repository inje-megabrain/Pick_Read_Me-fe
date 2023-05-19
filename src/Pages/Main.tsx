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
      <div>Main</div>
      <div className="bg-red-500">TailWind CSS 적용 TEST</div>
      <div className="bg-red-300">Another Color</div>
      <button onClick={handleMyPage}>MyPage로 가기</button>
      <button onClick={handleLogin}>Login하기</button>
    </>
  );
};

export default Main;
