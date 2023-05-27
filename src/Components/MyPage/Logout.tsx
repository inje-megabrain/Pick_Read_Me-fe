import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    if (!localStorage.getItem('accessToken')) {
      navigate('/');
    }
  };
  return (
    <>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </>
  );
};

export default Logout;
