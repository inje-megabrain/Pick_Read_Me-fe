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
      <div>
        {/* <div>
          <SideNav />
        </div> */}
        <div className="flex justify-start fixed">
          <SideNav />
        </div>
        <div className="flex justify-center">
          <Outlet />
        </div>
        {/* <div>
          <Profile />
        </div> */}
        {/* <div className="flex fixed mx-auto my-0 w-full min-w-fit">
          <Outlet></Outlet>
        </div> */}
      </div>
    </>
  );
};

export default MyPage;
