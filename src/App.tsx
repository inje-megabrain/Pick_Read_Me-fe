import { useSetRecoilState } from 'recoil';
import AppRouter from './Router/AppRouter';
import authAtom from './Atoms/auth';
import { useEffect } from 'react';

const App = () => {
  const setAuth = useSetRecoilState(authAtom);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAuth(token);
      console.log('로그인 됐어요!');
    } else {
      console.log('로그인 해주세요');
    }
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
