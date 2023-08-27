import { Outlet } from 'react-router-dom';
import Profile from '../Components/MyPage/Profile';
import SideNav from '../Components/MyPage/SideNav';
//import { getCookie } from '../Api/Cookies';
import { useRefresh } from '../Hooks/useRefresh';
import Header from '../Components/Headers/Header';

const MyPage = () => {
  //useAccess();
  useRefresh();
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="flex mx-auto my-0 justify-start w-60 h-screen mt-44 ml-[100px]">
          <SideNav />
        </div>
        <div className="flex justify-center w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MyPage;
