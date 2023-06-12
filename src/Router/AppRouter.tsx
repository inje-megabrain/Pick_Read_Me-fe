import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import MyPage from '../Pages/MyPage';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Delete from '../Pages/Delete';
import Redirect from '../Pages/Redirect';
import MainScroll from '../Pages/MainScroll';
import Rank from '../Pages/Rank';
import Logout from '../Components/MyPage/Logout';
import Profile from '../Components/MyPage/Profile';
import MyPost from '../Pages/MyPost';
import Like from '../Pages/Like';
import Write from '../Pages/Write';

const AppRouter = () => {
  const access = localStorage.getItem('accessToken');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<MainScroll />} />
            <Route path="rank" element={<Rank />} />
          </Route>
          {access ? (
            <>
              <Route path="/mypage" element={<MyPage />}>
                <Route path="profile" element={<Profile />} />
                <Route path="myPost" element={<MyPost />} />
                <Route path="like" element={<Like />} />
                <Route path="logout" element={<Logout />} />
                <Route path="delete" element={<Delete />} />
              </Route>
              <Route path="/write" element={<Write />} />
            </>
          ) : (
            <Route path="login" element={<Login />} />
          )}

          <Route path="/login" element={<Login />} />
          <Route path="/redirect" element={<Redirect />} />

          <Route path="*" element={<NotFound />}></Route>
          {/* <Route path="/" element={<Test />}>
            <Route path="testB" element={<TestM />} />
            <Route path="testA" element={<TestT />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
