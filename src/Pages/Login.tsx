import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../Components/MyPage/SideNav';

const Login = () => {
  //gitHubURL
  const gitHubURL = `http://52.78.80.150:9000/login`;
  const handleLogin = () => {
    console.log('깃허브로 로그인합니다.');
    window.location.href = gitHubURL;
    //유저 정보 요청
  };
  return (
    <>
      로그인페이지입니다<br></br>
      <button onClick={handleLogin} className="bg-blue-300">
        깃허브 로그인
      </button>
    </>
  );
};

export default Login;
