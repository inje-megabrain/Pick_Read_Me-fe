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
          <NavItem>
            <NavLink className="inline-block w-full" to={'like'}>
              Like
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="inline-block w-full" to={'logout'}>
              로그아웃
            </NavLink>
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
