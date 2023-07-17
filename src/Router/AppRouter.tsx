import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import MyPage from '../Pages/MyPage';
import NotFound from '../Pages/NotFound';
import Delete from '../Pages/Delete';
import Redirect from '../Pages/Redirect';
import MainScroll from '../Pages/MainScroll';
import Rank from '../Pages/Rank';
import Profile from '../Components/MyPage/Profile';
import MyPost from '../Pages/MyPost';
import Like from '../Pages/Like';
import Write from '../Pages/Write';
import { useAccess } from '../Hooks/useAccess';

const AppRouter = () => {
  const token = useAccess();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<MainScroll />} />
            <Route path="rank" element={<Rank />} />
          </Route>
          {token ? (
            <>
              <Route path="/mypage" element={<MyPage />}>
                <Route path="profile" element={<Profile />} />
                <Route path="myPost" element={<MyPost />} />
                <Route path="like" element={<Like />} />
                <Route path="delete" element={<Delete />} />
              </Route>
              <Route path="/write" element={<Write />} />
            </>
          ) : (
            <Route path="*" element={<NotFound />} />
          )}

          <Route path="/redirect" element={<Redirect />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
