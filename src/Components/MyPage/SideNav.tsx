import Nav from '../Nav/Nav';
import NavList from '../Nav/NavList';
import NavItem from '../Nav/NavItem';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="fixed bg-slate-100 w-60 h-full py-24">
      <Nav>
        <NavList>
          <NavItem>뿅</NavItem>
          <NavItem>뿅</NavItem>
          <NavItem>
            <NavLink to={'/'}>Home</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </div>
  );
};

export default SideNav;
