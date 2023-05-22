import Nav from '../Nav/Nav';
import NavList from '../Nav/NavList';
import NavItem from '../Nav/NavItem';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="fixed bg-slate-100 w-60 h-full py-24">
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to={'/'}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'mypost'}>My Post</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'like'}>Like</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'login'}>로그아웃</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'delete'}>회원 탈퇴</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </div>
  );
};

export default SideNav;
