import { Outlet } from 'react-router-dom';
import Profile from '../Components/MyPage/Profile';
import SideNav from '../Components/MyPage/SideNav';
//import { getCookie } from '../Api/Cookies';
import { useRefresh } from '../Hooks/useRefresh';

const MyPage = () => {
  //useAccess();
  useRefresh();
  return (
    <>
      <div className="flex justify-start fixed">
        <SideNav />
      </div>
      <div className="flex justify-center">
        <Profile />
      </div>
      <div className="flex justify-start ml-60">
        <Outlet />
        <h1>안돼?</h1>
      </div>
    </>
  );
};

export default MyPage;
