import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-red-500">TailWind CSS 적용 TEST</div>
        <div className="bg-red-300">Another Color</div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
