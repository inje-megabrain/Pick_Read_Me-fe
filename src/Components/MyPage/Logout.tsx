import { useNavigate } from 'react-router-dom';
import logout from '../../Api/logout';
import { getCookie } from '../../Api/Cookies';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (getCookie('refreshToken')) {
      logout().then(() => {
        localStorage.removeItem('accessToken');
      });
    } else {
      localStorage.removeItem('accessToken');
    }

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
