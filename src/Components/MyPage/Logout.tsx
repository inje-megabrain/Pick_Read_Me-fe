import { useNavigate } from 'react-router-dom';
import logout from '../../Api/logout';
import { getCookie } from '../../Api/Cookies';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (getCookie('refreshToken')) {
      logout().then(() => {
        localStorage.removeItem('accessToken');
        console.log('홍');
        navigate('/');
      });
    } else {
      localStorage.removeItem('accessToken');
      console.log('힝');
    }

    if (!localStorage.getItem('accessToken')) {
      navigate('/');
    }
  };

  return (
    <>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
        {localStorage.getItem('accessToken')}
      </div>
    </>
  );
};

export default Logout;
