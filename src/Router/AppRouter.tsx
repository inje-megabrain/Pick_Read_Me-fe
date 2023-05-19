import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';
import MyPage from '../Pages/MyPage';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
