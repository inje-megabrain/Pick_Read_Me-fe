import Nav from '../Nav/Nav';
import NavList from '../Nav/NavList';
import NavItem from '../Nav/NavItem';
import { NavLink, useNavigate } from 'react-router-dom';
import logout from '../../Api/logout';
import { getCookie, removeCookie } from '../../Api/Cookies';
import NavLinks from '../Nav/NavLink';

const SideNav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (getCookie('refreshToken')) {
      logout().then(() => {
        removeCookie('refreshToken'); // 리프레시 토큰 삭제
        localStorage.removeItem('accessToken'); //액세스 토큰 삭제
        console.log('리프레시, 액세스 토큰 삭제 완료');
        window.location.href = '/'; // navigate('/')으로 하면 reload가 되지 않아 login 버튼 활성화가 안됨.
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
    <div className="w-full h-max">
      <Nav>
        <NavList>
          <NavItem>
            <NavLink className="inline-block w-full" to={'/'}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="inline-block w-full" to={'profile'}>
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="inline-block w-full" to={'mypost'}>
              My Post
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink className="inline-block w-full" to={'like'}>
              Like
            </NavLink>
          </NavItem> */}
          <NavItem>
            <a className="inline-block w-full" onClick={handleLogout}>
              로그아웃
            </a>
          </NavItem>
          <NavItem>
            <NavLink className="inline-block w-full" to={'delete'}>
              회원 탈퇴
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </div>
  );
};

export default SideNav;
