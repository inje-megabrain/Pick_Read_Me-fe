import Header from '../Components/Headers/Header';
import MainScroll from './MainScroll';
import StickyBar from '../Components/StickyBar/StickyBar';
import MainScrollHeader from '../Components/Headers/MainScrollHeader';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="bg-blue-200 w-4/5 h-screen mx-auto">
        <MainScrollHeader />
        <MainScroll />
        <Outlet />
        <StickyBar />
      </div>
    </div>
  );
};

export default Main;
