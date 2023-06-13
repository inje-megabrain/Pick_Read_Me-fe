import Nav from '../Nav/Nav';
import NavList from '../Nav/NavList';
import NavItem from '../Nav/NavItem';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="w-full h-max">
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to={'/'}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'profile'}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'mypost'}>My Post</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'like'}>Like</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={'logout'}>로그아웃</NavLink>
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
