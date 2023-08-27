import AppRouter from './Router/AppRouter';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

const App = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken');
  //   if (!token) {
  //     navigate('/');
  //   }
  // }, []);
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
