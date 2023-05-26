import Header from '../Components/Headers/Header';
import MainScroll from './MainScroll';
import StickyBar from '../Components/StickyBar/StickyBar';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import postAtom from '../Atoms/post';
import Backdrop from '../Components/Backdrop';

const Main = () => {
  const selectedId = useRecoilValue(postAtom);
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
