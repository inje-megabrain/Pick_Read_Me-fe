import Header from '../Components/Headers/Header';
import MainScroll from './MainScroll';
import StickyBar from '../Components/StickyBar/StickyBar';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import postAtom from '../Atoms/post';
import Backdrop from '../Components/Backdrop';

import { useAccess } from '../Hooks/useAccess';
import { useRefresh } from '../Hooks/useRefresh';

const Main = () => {
  const selectedId = useRecoilValue(postAtom);
  useAccess();
  useRefresh();

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
