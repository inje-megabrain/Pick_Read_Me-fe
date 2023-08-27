import Header from '../Components/Headers/Header';
import { Outlet } from 'react-router-dom';
import { useAccess } from '../Hooks/useAccess';
import { useRefresh } from '../Hooks/useRefresh';

const Main = () => {
  useAccess();
  useRefresh();

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="w-4/5 h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
