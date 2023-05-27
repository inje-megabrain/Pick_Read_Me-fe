import Header from '../Components/Headers/Header';
import MainScroll from './MainScroll';
import StickyBar from '../Components/StickyBar/StickyBar';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { Outlet } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import postAtom from '../Atoms/post';
import Backdrop from '../Components/Backdrop';
import { useEffect } from 'react';
import authAtom from '../Atoms/auth';

const Main = () => {
  const selectedId = useRecoilValue(postAtom);
  const setAuth = useSetRecoilState(authAtom);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuth(token);
      console.log('로그인 됐어요!');
    } else {
      console.log('로그인 해주세요');
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        {selectedId && <Backdrop />}
        <div className="bg-blue-200 w-4/5 h-screen">
          <Outlet />
          <StickyBar />
        </div>
      </div>
    </div>
  );
};

export default Main;
