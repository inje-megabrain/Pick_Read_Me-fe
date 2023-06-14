import { Outlet } from 'react-router-dom';
import Profile from '../Components/MyPage/Profile';
import SideNav from '../Components/MyPage/SideNav';
//import { getCookie } from '../Api/Cookies';
import { useRefresh } from '../Hooks/useRefresh';

const MyPage = () => {
  //useAccess();
  useRefresh();
  return (
    <div className="flex">
      <div className="w-60">
        <div className="flex justify-start w-60 h-screen py-24">
          <SideNav />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MyPage;
