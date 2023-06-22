import Header from '../Components/Headers/Header';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import postAtom from '../Atoms/post';
import Backdrop from '../Components/Backdrop';

import { useAccess } from '../Hooks/useAccess';
import { useRefresh } from '../Hooks/useRefresh';

const Main = () => {
  const selectedId = useRecoilValue(postAtom);
  useAccess();
  useRefresh();

  return (
    <div>
      <Header />
      {selectedId && <Backdrop />}
      <div className="flex justify-center">
        <div className="w-4/5 h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
