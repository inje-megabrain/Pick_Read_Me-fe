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
      <div className="flex mx-auto my-0 w-9/12">
        <div className="w-60">
          <div className="flex justify-start w-60 h-screen mt-44">
            <SideNav />
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MyPage;
