import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
// import Test from '../Pages/Test';
// import TestM from '../Pages/TestM';
// import TestT from '../Pages/TestT';
import MyPage from '../Pages/MyPage';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Delete from '../Pages/Delete';
import Redirect from '../Pages/Redirect';
import MainScroll from '../Pages/MainScroll';
import Rank from '../Pages/Rank';
import Logout from '../Components/MyPage/Logout';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<MainScroll />} />
            <Route path="rank" element={<Rank />} />
          </Route>
          <Route path="/mypage" element={<MyPage />}>
            <Route path="myPost" element={<Login />} />
            <Route path="like" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="delete" element={<Delete />} />
          </Route>
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
