import Profile from '../Components/MyPage/Profile';
import SideNav from '../Components/MyPage/SideNav';

const MyPage = () => {
  return (
    <>
      <div className="flex justify-start fixed">
        <SideNav />
      </div>
      <div className="flex justify-center">
        <Profile />
      </div>
    </>
  );
};

export default MyPage;
