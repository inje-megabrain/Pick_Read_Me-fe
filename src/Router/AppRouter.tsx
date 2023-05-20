import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
// import Test from '../Pages/Test';
// import TestM from '../Pages/TestM';
// import TestT from '../Pages/TestT';
import MyPage from '../Pages/MyPage';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Delete from '../Pages/Delete';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />}>
            <Route path="delete" element={<Delete />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />}></Route>
          {/* <Route path="/" element={<Test />}>
            <Route path="testM" element={<TestM />} />
            <Route path="testT" element={<TestT />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
